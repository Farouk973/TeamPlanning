import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AutoComplete} from "../../models/AutoComplete.model";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import { map, startWith } from 'rxjs/operators';
import {AutoCompleteService} from "../auto-complete.service";
import {CookieService} from "ngx-cookie-service";
import {Location} from "@angular/common";
import url from "url";

@Component({
  selector: 'app-dynamic-auto-complete',
  templateUrl: './dynamic-auto-complete.component.html',
  styleUrls: ['./dynamic-auto-complete.component.css'],

})
export class DynamicAutoCompleteComponent implements OnInit {

  @Input() autoComplete$!:Observable<AutoComplete> ;
  autoComplete = new AutoComplete();

  @Input()  set idResponse (id: string){
    this.addOptionToItem(id)
  };

  @Output() added = new EventEmitter();
  myControl = new FormControl();
  options: string[];
  data: string[]
 // idItem: string ="642ecc35fa31cfb9eeef6648";
  selectedValue;
  filteredOptions: Observable<string[]>;
  optionLength: Observable<number>;
  chipsOptions: string[]=[];
   isTrue : boolean
   // idResponse = this.cookieService.get('cookieName');
  // Function to call when the option changes.
  onChange = (autoComplete: string) => {};

  // Function to call when the input is touched (when the autocomplete is clicked).
  onTouched = () => {};

  get value() {
    return this.selectedValue;
  }
  constructor(private autoCompleteService : AutoCompleteService,private cookieService: CookieService) { }

  ngOnInit(): void {
    this.autoComplete$.subscribe((autoCompleteData)=>{
      this.autoComplete=autoCompleteData;
      this.isTrue=this.autoComplete.saveInputInBase;
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      this.autoCompleteService.getDataOptions(this.autoComplete?.optionsDataEndpoint).subscribe((data)=>{
        this.options=data.map((m)=>m[this.autoComplete.nameAttributeForSearch] )
        this.data=data.map((m)=>m.id + '=*>' + m[this.autoComplete.nameAttributeForSearch] )
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      });

    });

  }

    private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.data.filter(option => option.split("=*>")[1].toLowerCase().includes(filterValue));
  }




  enter() {
    const controlValue = this.myControl.value;
    if(this.isTrue) {
      const data = {description: controlValue }
      console.log(data)
      this.autoCompleteService.addToBase(this.autoComplete.sourceSaveItemEndpoint , data).subscribe((data)=>{
        this.autoCompleteService.getDataOptions(this.autoComplete?.optionsDataEndpoint).subscribe((data)=>{
          this.options=data.map((m)=>m[this.autoComplete.nameAttributeForSearch] )
          this.data=data.map((m)=>m.id + '=*>' + m[this.autoComplete.nameAttributeForSearch] )
        });
      })
    }

    if (!this.options.some(entry => entry === controlValue) && this.isTrue) {
      this.added.emit(controlValue);
      this.options.push(controlValue);
      setTimeout(
        () => {
          this.myControl.setValue(controlValue);
          this.writeValue(controlValue);
        }
      );
    } else {
      this.writeValue(controlValue);
    }
  }

  // Allows Angular to update the model (option).
  // Update the model and changes needed for the view here.
  writeValue(option: string): void {
    this.selectedValue = option;
    this.onChange(option);
  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (option: string) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  addOptionToItem(option ) {
    let id=  this.cookieService.get('idResponse');
    let idAdded=option.split("=*>")[0]
    this.autoCompleteService.assignToItem(this.autoComplete.sourceAssignItemEndpoint , id ,idAdded).subscribe((assignItem)=>{
      console.log(assignItem)
      this.autoComplete$.subscribe((autoCompleteData)=> {
        this.autoComplete = autoCompleteData;
        this.autoCompleteService.getItem(this.autoComplete?.getItemEndpoint, id).subscribe((data) => {
          this.chipsOptions = data[this.autoComplete?.nameListOfChips]
        });
      });
    });

  }

  removeOptionAfterAssign(option :string) {
    let id=  this.cookieService.get('idResponse');
    let idUnassigned= option['id']
    this.autoCompleteService.deleteOptionAfterAssignToItem(this.autoComplete.sourceUnassignOptionAfterAssignToItemEndpoint,id, idUnassigned).
    subscribe((unassignItem)=> {
        console.log(unassignItem)
      this.autoCompleteService.getItem(this.autoComplete?.getItemEndpoint, id).subscribe((data) => {
        this.chipsOptions = data[this.autoComplete?.nameListOfChips]
      });
    }
    );
  }

}


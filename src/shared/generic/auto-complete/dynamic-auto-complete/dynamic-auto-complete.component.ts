import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {AutoComplete} from "../../models/AutoComplete.model";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import { map, startWith } from 'rxjs/operators';
import {AutoCompleteService} from "../auto-complete.service";
import {CookieService} from "ngx-cookie-service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-dynamic-auto-complete',
  templateUrl: './dynamic-auto-complete.component.html',
  styleUrls: ['./dynamic-auto-complete.component.css'],

})
export class DynamicAutoCompleteComponent implements OnInit  {

  @Input() autoComplete$!:Observable<AutoComplete> ;
  autoComplete = new AutoComplete();
  @Input() idGeneric : string;
  @Output() added = new EventEmitter();
  myControl = new FormControl();
  options: string[];
  data: string[]
  selectedValue;
  filteredOptions: Observable<string[]>;
  optionLength: Observable<number>;
  chipsOptions: string[]=[];
   isTrue : boolean

  onChange = (autoComplete: string) => {};

  // Function to call when the input is touched (when the autocomplete is clicked).
  onTouched = () => {};
  private string: any;

  get value() {
    return this.selectedValue;
  }
  constructor(private autoCompleteService : AutoCompleteService,private cookieService: CookieService , private location : Location) { }

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
  ngOnChange(){}

    private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.data.filter(option => option.split("=*>")[1].toLowerCase().includes(filterValue));
  }

  enter() {
    const controlValue = this.myControl.value;
    if(this.isTrue) {
      const data = {description: controlValue }
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
          this.myControl.setValue('');
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

  addOptionToItem(option){
    const url = this.location.path();
    let id = url.substring(url.lastIndexOf('/') + 1);
    let idAdded=option.split("=*>")[0]
    console.log("id",idAdded)
    this.autoCompleteService.assignToItem(this.autoComplete.sourceAssignItemEndpoint , this.idGeneric === undefined ? id : this.idGeneric ,idAdded).subscribe((assignItem)=>{
      this.autoComplete$.subscribe((autoCompleteData)=> {
        this.autoComplete = autoCompleteData;
        this.autoCompleteService.getItem(this.autoComplete?.getItemEndpoint, this.idGeneric === undefined ? id : this.idGeneric).subscribe((data) => {
          this.chipsOptions = data[this.autoComplete?.nameListOfChips]

        });
      });
    });
  }

  removeOptionAfterAssign(option :string) {
    const url = this.location.path();
    let id = url.substring(url.lastIndexOf('/') + 1);
    let idUnassigned= option['id']
    this.autoCompleteService.deleteOptionAfterAssignToItem(this.autoComplete.sourceUnassignOptionAfterAssignToItemEndpoint,this.idGeneric === undefined ? id : this.idGeneric, idUnassigned).
    subscribe((unassignItem)=> {
      this.autoCompleteService.getItem(this.autoComplete?.getItemEndpoint, this.idGeneric === undefined ? id : this.idGeneric).subscribe((data) => {
        this.chipsOptions = data[this.autoComplete?.nameListOfChips]
      });
    }
    );
  }

  clearInput() {
    this.myControl.setValue('');
  }
}


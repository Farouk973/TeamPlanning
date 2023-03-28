import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AutoComplete} from "../../models/AutoComplete.model";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import { map, startWith } from 'rxjs/operators';
import {AutoCompleteService} from "../auto-complete.service";

@Component({
  selector: 'app-dynamic-auto-complete',
  templateUrl: './dynamic-auto-complete.component.html',
  styleUrls: ['./dynamic-auto-complete.component.css'],

})
export class DynamicAutoCompleteComponent implements OnInit {

  @Input() autoComplete$!:Observable<AutoComplete> ;
  autoComplete = new AutoComplete();


  @Output() added = new EventEmitter();
  myControl = new FormControl();
  options: string[];
  idItem: string ="azert";
  selectedValue;
  filteredOptions: Observable<string[]>;
  chipsOptions: string[]=[];
   isTrue : boolean
  // Function to call when the option changes.
  onChange = (autoComplete: string) => {};

  // Function to call when the input is touched (when the autocomplete is clicked).
  onTouched = () => {};

  get value() {
    return this.selectedValue;
  }
  constructor(private autoCompleteService : AutoCompleteService) { }

  ngOnInit(): void {

    this.autoComplete$.subscribe((autoCompleteData)=>{
      this.autoComplete=autoCompleteData;
      this.isTrue=this.autoComplete.saveInputInBase;
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      this.autoCompleteService.getDataOptions(this.autoComplete?.optionsDataEndpoint).subscribe((data)=>{
        this.options=data.map(t=>t.title);
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.autoCompleteService.getIdLastItem(this.autoComplete?.getIdLastItemEndpoint).subscribe((id :any)=>{
          this.idItem=id;
          console.log(this.idItem)
        });
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      })
    });

  }
    private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  enter() {
    const controlValue = this.myControl.value;
    if(this.isTrue) {
      const data = {description: controlValue }
      console.log(data)
      this.autoCompleteService.addToBase(this.autoComplete.sourceSaveItemEndpoint , data).subscribe((data)=>{
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

  addOptionToItem(option) {
    this.chipsOptions.push(option);
    this.autoCompleteService.assignToItem(this.autoComplete.sourceAssignItemEndpoint ,this.idItem ,option).subscribe((assignItem)=>{
      console.log(assignItem)
    });

  }

  removeOptionAfterAssign(option) {

    const index = this.chipsOptions.indexOf(option);
    if (index >= 0) {
      this.chipsOptions.splice(index, 1);
    }
  }
}


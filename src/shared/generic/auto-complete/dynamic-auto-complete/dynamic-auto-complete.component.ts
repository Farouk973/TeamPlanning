import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {AutoComplete} from "../../models/AutoComplete.model";
import {Observable} from "rxjs";
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import { map, startWith } from 'rxjs/operators';
import {AutoCompleteService} from "../auto-complete.service";

@Component({
  selector: 'app-dynamic-auto-complete',
  templateUrl: './dynamic-auto-complete.component.html',
  styleUrls: ['./dynamic-auto-complete.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicAutoCompleteComponent ),
      multi: true
    }
  ]
})
export class DynamicAutoCompleteComponent implements OnInit {

  @Input() autoComplete$!:Observable<AutoComplete> ;
  autoComplete = new AutoComplete();
  @Output() added = new EventEmitter();
  myControl = new FormControl();
  options: string[];
  selectedValue;
  filteredOptions: Observable<string[]>;
  question = 'Would you like to add ';
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
      this.autoCompleteService.getDataOptions(this.autoComplete?.optionsDataEndpoint).subscribe((data)=>{
        this.options=data.map(r=>r.title);
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      })
    })

  console.log(this.myControl.setValue)

  }
    private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  optionSelected(option) {
    if (option.value.indexOf(this.question) === 0) {
      let newOption = option.value.substring(this.question.length).split('?')[0];
      this.options.push(newOption);
      this.added.emit(newOption);
      this.myControl.setValue(newOption);
      this.writeValue(newOption);
    } else {
      this.myControl.setValue(option.value);
      this.writeValue(option.value);
    }
  }

  enter() {
    const controlValue = this.myControl.value;
    if (!this.options.some(entry => entry === controlValue)) {
      this.added.emit(controlValue);
      const index = this.options.push(controlValue);
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

  addOption(option) {
    console.log(option)
  }
}

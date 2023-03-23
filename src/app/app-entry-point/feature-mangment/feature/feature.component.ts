import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map, startWith} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Stepper} from "../../../../shared/generic/models/stepper.model";
import {HttpClient} from "@angular/common/http";
import {AutoComplete} from "../../../../shared/generic/models/AutoComplete.model";
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  options = ['Option 1', 'Option 2', 'Option 3', 'raed' , 'ali' , "rayen"];
  myForm: FormGroup;

  public autoComplete$ : Observable<AutoComplete> ;
  constructor(private fb: FormBuilder ,private http: HttpClient) {}

  ngOnInit() {
    this.autoComplete$=this.http.get<AutoComplete>('/assets/auto.json');
    this.myForm = this.fb.group({
      option: [],
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  onItemAdded(itemToBeAdded) {
    console.log('Item to be added: ', itemToBeAdded);
  }
}

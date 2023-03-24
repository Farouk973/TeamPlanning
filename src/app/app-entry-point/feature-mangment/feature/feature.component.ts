import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AutoComplete} from "../../../../shared/generic/models/AutoComplete.model";
import {Observable} from "rxjs";
import {Stepper} from "../../../../shared/generic/models/stepper.model";
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  public autoComplete$!: Observable<AutoComplete> ;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  /*  this.http.get('/assets/auto.json').subscribe((autoCompleteData:any)=>{
      this.autoComplete=autoCompleteData;
    })*/
    this.autoComplete$=this.http.get<AutoComplete>('/assets/auto.json');
  }

  onItemAdded(itemToBeAdded) {
    console.log('Item to be added: ', itemToBeAdded);
  }
}

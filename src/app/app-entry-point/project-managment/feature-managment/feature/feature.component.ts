import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AutoComplete} from "../../../../../shared/generic/models/AutoComplete.model";
import {Observable} from "rxjs";
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  public autoComplete$!: Observable<AutoComplete> ;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.autoComplete$=this.http.get<AutoComplete>('/assets/feature.json');
  }
}

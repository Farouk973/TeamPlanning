import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Spreadsheets} from "../../../../../shared/generic/models/Spreadsheets.model";

@Component({
  selector: 'app-spreadsheets-project',
  templateUrl: './spreadsheets-project.component.html',
  styleUrls: ['./spreadsheets-project.component.css']
})
export class SpreadsheetsProjectComponent implements OnInit {

  public spreadsheets$ : Observable<Spreadsheets> ;
  @Input() chiffrage : boolean;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.spreadsheets$=this.http.get<Spreadsheets>('/assets/spreadsheets.json');
  }

}

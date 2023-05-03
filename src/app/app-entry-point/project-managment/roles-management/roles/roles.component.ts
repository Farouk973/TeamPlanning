import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AutoComplete} from "../../../../../shared/generic/models/AutoComplete.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  public autoComplete$!: Observable<AutoComplete> ;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.autoComplete$=this.http.get<AutoComplete>('/assets/role.json');
  }

}

import {Component, Inject, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AutoComplete} from "../../../../../shared/generic/models/AutoComplete.model";
import {ID} from "../../../../../shared/generic/nxm-dialog/actiondialog/actiondialog.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-assign-unaasign-project',
  templateUrl: './assign-unaasign-project.component.html',
  styleUrls: ['./assign-unaasign-project.component.css']
})
export class AssignUnaasignProjectComponent implements OnInit {
  public role$!: Observable<AutoComplete> ;
  public feature$!: Observable<AutoComplete> ;
  @Input() id ;
  constructor(@Inject(ID) public idinjected: string ,private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.id || this.idinjected;
    this.role$=this.http.get<AutoComplete>('/assets/role.json');
    this.feature$=this.http.get<AutoComplete>('/assets/feature.json');
  }

}

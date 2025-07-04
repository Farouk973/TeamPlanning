import {Component, Inject, Input, OnInit} from '@angular/core';
import {ID} from "../../../../../shared/generic/nxm-dialog/actiondialog/actiondialog.component";
import {Observable} from "rxjs";
import {AutoComplete} from "../../../../../shared/generic/models/AutoComplete.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-assign-project-user',
  templateUrl: './assign-project-user.component.html',
  styleUrls: ['./assign-project-user.component.css']
})
export class AssignProjectUserComponent implements OnInit {
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

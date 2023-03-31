import { Component, OnInit } from '@angular/core';
import { endpoints } from 'src/shared/generic/models/domain.model';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public Endpoints : Observable<endpoints> ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.Endpoints=this.http.get<endpoints>('assets/categoriesCG.json');
    console.log(this.Endpoints)
  }

}

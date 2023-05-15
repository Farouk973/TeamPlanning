import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from 'src/shared/generic/models/bigdomain.model';

@Component({
  selector: 'app-skills-management',
  templateUrl: './skills-management.component.html',
  styleUrls: ['./skills-management.component.css']
})
export class SkillsManagementComponent implements OnInit {

  public Endpoints : Observable<endpoints> ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.Endpoints=this.http.get<endpoints>('assets/categoriesCGeditable.json');
    
  }

}

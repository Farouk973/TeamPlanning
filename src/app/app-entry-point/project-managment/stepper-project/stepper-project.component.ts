import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Stepper} from "../../../../shared/generic/models/stepper.model";
import {Observable} from "rxjs";
@Component({
  selector: 'app-stepper-project',
  templateUrl: './stepper-project.component.html',
  styleUrls: ['./stepper-project.component.css']
})
export class StepperProjectComponent implements OnInit {
  public stepper$ : Observable<Stepper> ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.stepper$=this.http.get<Stepper>('/assets/stepper.json');
  }
}

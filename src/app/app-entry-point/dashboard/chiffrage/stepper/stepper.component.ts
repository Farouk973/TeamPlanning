import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  public stepperData!: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http
      .get('/assets/stepper.json')
      .subscribe((formData: any) => {
        this.stepperData = formData;
        console.log(this.stepperData)
      });


  }
}

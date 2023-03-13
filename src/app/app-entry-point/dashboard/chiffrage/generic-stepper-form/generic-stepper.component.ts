import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css']
})
export class GenericStepperComponent implements OnInit {
 @Input() stepperData:any={};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get('/assets/stepper.json')
      .subscribe((formData:any ) => {
        this.stepperData = formData;
        console.log(this.stepperData)

      });
  }

}

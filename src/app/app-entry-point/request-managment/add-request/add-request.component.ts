import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stepper } from 'src/shared/generic/models/stepper.model';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  public stepper$ : Observable<Stepper> ;

  chiff : boolean;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.stepper$=this.http.get<Stepper>('/assets/requestStepper.json');
  }

}

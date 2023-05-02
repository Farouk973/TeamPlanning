import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-stepper-skill-dialog',
  templateUrl: './stepper-skill-dialog.component.html',
  styleUrls: ['./stepper-skill-dialog.component.css']
})
export class StepperSkillDialogComponent implements OnInit {

  public Endpoints : Observable<any> ;
  selectedchips:any[];
  constructor(private http: HttpClient,public dialogRef: MatDialogRef<StepperSkillDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: { skillList: BehaviorSubject<any[]> }) { }

  ngOnInit(): void {
    this.Endpoints=this.http.get<any>('assets/categoriesCG.json');
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  handlechipsResult(result: any[]) {
    this.selectedchips=result
    
  }
  onSaveClick(): void {
    console.log(this.selectedchips);
    this.dialogRef.close(this.selectedchips);
  }

}

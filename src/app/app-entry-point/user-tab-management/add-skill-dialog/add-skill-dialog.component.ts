import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { domain, endpoints } from 'src/shared/generic/models/bigdomain.model';
@Component({
  selector: 'app-add-skill-dialog',
  templateUrl: './add-skill-dialog.component.html',
  styleUrls: ['./add-skill-dialog.component.css']
})
export class AddSkillDialogComponent implements OnInit {
  public Endpoints : Observable<any> ;
  selectedchips:any[];
  constructor(private http: HttpClient,public dialogRef: MatDialogRef<AddSkillDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: { skillList: BehaviorSubject<any[]> }) { 

  }

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

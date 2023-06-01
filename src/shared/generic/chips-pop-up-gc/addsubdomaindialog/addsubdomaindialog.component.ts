import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-addsubdomaindialog',
  templateUrl: './addsubdomaindialog.component.html',
  styleUrls: ['./addsubdomaindialog.component.css']
})
export class AddsubdomaindialogComponent implements OnInit {
  categoryName: string;
  constructor(public dialogRef: MatDialogRef<AddsubdomaindialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private http: HttpClient) { }

  ngOnInit(): void {
    console.log()
  }
  onSubmit(): void {
  const apiUrl = `${environment.baseUrl}/api/Skills/add-category`;
  const data = { name: this.categoryName,bigcategoryId:this.data.id };
  this.http.post(apiUrl, data).subscribe(
    response => {
      console.log(response);
      this.dialogRef.close();
    },
    error => {
      console.error(error);
    }
  );
  }
  onCancel(): void {
    this.dialogRef.close();
  }

}

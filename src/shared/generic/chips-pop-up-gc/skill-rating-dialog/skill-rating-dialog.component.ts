import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { domain } from '../../models/bigdomain.model';
@Component({
  selector: 'app-skill-rating-dialog',
  templateUrl: './skill-rating-dialog.component.html',
  styleUrls: ['./skill-rating-dialog.component.css']
})
export class SkillRatingDialogComponent implements OnInit {

  
  rating: number = 0;

  constructor(
    public dialogRef: MatDialogRef<SkillRatingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: domain) {}

  ngOnInit(): void {
    
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  setRating(star: number) {
    this.data.value = star;
    console.log(this.data.value);
  }
  onSaveClick(): void {
    const dataToSave = {
      name: this.data.name,
      value: this.data.value,
      id:this.data.id
    };
    this.dialogRef.close(dataToSave);
  }

}

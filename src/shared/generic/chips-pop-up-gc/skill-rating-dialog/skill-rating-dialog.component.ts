import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { domain } from '../../models/domain.model';
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
    throw new Error('Method not implemented.');
  }
  ratestring = Number(this.data.rate);
  
  onCancelClick(): void {
    this.dialogRef.close();
  }
  setRating(star: number) {
    this.ratestring = star;
    console.log(this.ratestring);
  }

}

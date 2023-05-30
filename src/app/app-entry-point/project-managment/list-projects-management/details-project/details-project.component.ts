import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent  {

  constructor( public dialogRef: MatDialogRef<DetailsProjectComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {p} , private router : Router) { }


  displayCoting(id) {
    this.router.navigate(['/costing/cost-project/', id])
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSkillDialogComponent } from '../add-skill-dialog/add-skill-dialog.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {
  skillsChanged = new Subject<any>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddSkillDialog(): void {
    const dialogRef = this.dialog.open(AddSkillDialogComponent, {
      maxWidth: '1000px',
      minWidth:'800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.skillsChanged.next(result);
        console.log(result)
      }
    });
  }
  getSkillValueStars(value: number): string[] {
    const stars = [];
    for (let i = 0; i < value; i++) {
      stars.push('star');
    }
    return stars;
  }

}

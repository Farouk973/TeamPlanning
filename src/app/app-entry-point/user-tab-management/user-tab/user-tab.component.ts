import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSkillDialogComponent } from '../add-skill-dialog/add-skill-dialog.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { domain } from 'src/shared/generic/models/bigdomain.model';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {
  skillsChanged = new BehaviorSubject<domain[]>([]);
  constructor(public dialog: MatDialog) { }
  userProjects = [
    {
      name: 'NXM - Tensai - Team Planning',
      description: "NXM - Tensai - Team Planning", 
      Languages: ["C#" , "TypeScript" , "HTML"]
    },
    {
      name: ' NXM - Tensai - Bottokōdo',
      description:
        'NXM - Genuis - Code Generation Bot',
        Languages:["JavaScript" , "CSS"]
    },
    {
      name: 'NXM - Tensai - Intranet',
      description:
        'NXM - Tensai - Intranet',
        Languages:["JavaScript" , "react.js"]
    },
  ];

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
  deleteSkill(index: number): void {
    const skills = this.skillsChanged.getValue();
    skills.splice(index, 1);
    this.skillsChanged.next(skills);
  }
  getSkillValueStars(value: number): string[] {
    const stars = [];
    for (let i = 0; i < value; i++) {
      stars.push('star');
    }
    return stars;
  }

}

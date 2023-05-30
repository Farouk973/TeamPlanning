import { HttpClient } from '@angular/common/http';
import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StepperSkillDialogComponent } from '../stepper-skill-dialog/stepper-skill-dialog.component';
import {Location} from "@angular/common";
import { BehaviorSubject, flatMap, forkJoin, tap } from 'rxjs';
@Component({
  selector: 'app-skill-stepper',
  templateUrl: './skill-stepper.component.html',
  styleUrls: ['./skill-stepper.component.css']
})
export class SkillStepperComponent implements OnInit {
  skillList= new BehaviorSubject<any[]>([]);
  totalSkills = 0;
  pageSize = 5;
  currentPageIndex = 0;
  pagedSkillList: any[] = [];

  @Input() order ;
  @Input() formData;
  @Input() chiffrage;
  @Input() submitType;
  constructor(public dialog: MatDialog,private http: HttpClient,private location : Location) {}
  ngOnInit(): void {
    this.fetchDataprojectskill();
    // setInterval(() => {
    //   this.fetchDataprojectskill();
    // }, 3000);
  }
  fetchDataprojectskill(): void {
    const url = this.location.path();
    let projectid = url.substring(url.lastIndexOf('/') + 1);
    console.log(projectid);

    this.http.get<any[]>("https://localhost:44312/api/Skills/project-Skills/" + projectid)
      .pipe(
        tap(data => this.skillList.next(data)),

      )
      .subscribe(() => {
        this.totalSkills = this.skillList.value.length;

        // Update the pagedSkillList
        this.updatePagedSkillList();
      });
  }
  updatePagedSkillList(): void {
    // Calculate the starting and ending index for the current page
    const startIndex = this.currentPageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    // Update the pagedSkillList property to display only the skills for the current page
    this.pagedSkillList = this.skillList.value.slice(startIndex, endIndex);
  }
  onPageChange(event: any): void {
    // Update the currentPageIndex property to reflect the new page index
    this.currentPageIndex = event.pageIndex;

    // Update the pagedSkillList to display the skills for the new page
    this.updatePagedSkillList();
  }
  openAddSkillDialog(): void {
    const dialogRef = this.dialog.open(StepperSkillDialogComponent, {
      maxWidth: '800px',
      minWidth: '800px',
      data: { skillList: this.skillList }
    });

    dialogRef.afterClosed().subscribe(result => {
      const url = this.location.path();
      let projectid = url.substring(url.lastIndexOf('/') + 1);
      console.log(projectid)
      if (result && result.length > 0) {
        const requests = [];
        for (let i = 0; i < result.length; i++) {
          const body = { ProjectId: projectid, skillId: result[i].id, rate: result[i].value };
          const url = 'https://localhost:44312/api/Skills/addskillToProject';
          const request = this.http.post(url, body);
          requests.push(request);
          console.log(result[i]);
        }
        forkJoin(requests).subscribe(() => {
          console.log("All skills added successfully");
          this.fetchDataprojectskill();
        }, error => {
          console.error(error);
          // Handle any errors that occurred during the HTTP requests
        });
      }

    });
  }
  deleteSkill(index: number): void {
    // Get the skill at the specified index
    const skill = this.skillList.getValue()[index+(this.currentPageIndex*this.pageSize)];
    const urlstepper = this.location.path();
    let projectid = urlstepper.substring(urlstepper.lastIndexOf('/') + 1);
    // Call the delete skill endpoint
    const url = `https://localhost:44312/api/Skills/removeskillToProject`;
    const body = { ProjectId:projectid, skillId: skill.id };
    this.http.post(url,body).subscribe(
      () => {
        // If the skill is deleted successfully, remove it from the skill list
        const updatedList = this.skillList.getValue().filter((s, i) => i !== index+(this.currentPageIndex*this.pageSize));
        //this.skillList.next(updatedList);
        this.fetchDataprojectskill();
      },
      (error) => {
        // Handle any errors that occur during the HTTP request
        console.error(error);
      }
    );
  }
  getSkillValueStars(value: number): string[] {
    const stars = [];
    for (let i = 0; i < value; i++) {
      stars.push('star');
    }
    return stars;
  }

}

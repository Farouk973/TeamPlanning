import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSkillDialogComponent } from '../add-skill-dialog/add-skill-dialog.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { domain } from 'src/shared/generic/models/bigdomain.model';
import { HttpClient } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {
 // skillsChanged = new BehaviorSubject<domain[]>([]);
  skillList= new BehaviorSubject<any[]>([]);
  projectList= new BehaviorSubject<any[]>([]);
  featureList= new BehaviorSubject<any[]>([]);
  totalSkills = 0;
  pageSize = 5;
  currentPageIndex = 0;
  pagedSkillList: any[] = [];
  userId:string ;
  constructor(public dialog: MatDialog,private http: HttpClient,public oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.checkAuth()
    .subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
     this.userId = userData.sub;
     
    });
   }
  ngOnInit(): void {
    // Fetch initial data
    this.fetchDatauserprofile();
    this.fetchDatauserproject();
    this.fetchDatauserfeature();
    // Set up polling to fetch updated data every 3 seconds
    setInterval(() => {
      this.fetchDatauserprofile();
    }, 1000);
  }
  fetchDatauserprofile(): void {
    this.http.get<any[]>("https://localhost:44312/api/Skills/user-Skills/"+this.userId).subscribe(
      (data: any[]) => {
        this.skillList.next(data);
      }
    );
    this.totalSkills = this.skillList.value.length;

    // Update the pagedSkillList
    this.updatePagedSkillList();
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


  fetchDatauserproject(): void {
    this.http.get<any[]>("https://localhost:44312/api/Project/user-projects/"+this.userId).subscribe(
      (data: any[]) => {
        this.projectList.next(data);
      }
    );
  }
  fetchDatauserfeature(): void {
    this.http.get<any[]>("https://localhost:44312/api/Feature/user-features/"+this.userId).subscribe(
      (data: any[]) => {
        this.featureList.next(data);
      }
    );
    }
  openAddSkillDialog(): void {
    const dialogRef = this.dialog.open(AddSkillDialogComponent, {
      maxWidth: '1000px',
      minWidth:'800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            const body = { userId: this.userId, skillId: result[i].id, rate: result[i].value };
            const url = 'https://localhost:44312/api/Skills/addskillToUser';
            this.http.post(url, body).subscribe(response => {
                console.log(response);
                // Handle the response from the server as needed
            }, error => {
                console.error(error);
                // Handle any errors that occurred during the HTTP request
            });
            console.log(result[i]);
        }
    }
    });
  }
  deleteSkill(index: number): void {
    // Get the skill at the specified index
    const skill = this.skillList.getValue()[index];
  
    // Call the delete skill endpoint
    const url = `https://localhost:44312/api/Skills/removeskillToUser`;
    const body = { userId: this.userId, skillId: skill.id };
    this.http.post(url,body).subscribe(
      () => {
        // If the skill is deleted successfully, remove it from the skill list
        const updatedList = this.skillList.getValue().filter((s, i) => i !== index);
        this.skillList.next(updatedList);
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

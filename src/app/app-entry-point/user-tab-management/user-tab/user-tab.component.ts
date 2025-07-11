import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSkillDialogComponent } from '../add-skill-dialog/add-skill-dialog.component';
import { BehaviorSubject, Subject, flatMap } from 'rxjs';
import { domain } from 'src/shared/generic/models/bigdomain.model';
import { HttpClient } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';
import { CardGridView } from 'src/shared/generic/models/CardView.model';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {
 // skillsChanged = new BehaviorSubject<domain[]>([]);
  skillList= new BehaviorSubject<any[]>([]);
  //projectList= new BehaviorSubject<any[]>([]);
  featureList= new BehaviorSubject<any[]>([]);
  totalSkills = 0;
  pageSize = 5;
  currentPageIndex = 0;
  pagedSkillList: any[] = [];
  userId:string ;
  inputSearch: string='';
  card: CardGridView;
  constructor(public dialog: MatDialog,private http: HttpClient,public oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.checkAuth()
    .subscribe(({userData,  }) => {
     this.userId = userData.sub;
     this.card ={
      endpoint: `${environment.baseUrl}/api/Project/user-projects/${this.userId}`,
      formdata: `${environment.baseUrl}/meta/CreateRoleCommand`,
      metadata: `${environment.baseUrl}/meta/GetProjectsDetailViewModel`,
      cardtitle: "name",
      carddescription: "description",
      cardDate:"created",
      cardInfo:"visibility",
      width: 300,
      height: 150,
      actionPanel: this.action,
    };
    });
   }
  ngOnInit(): void {
    this.fetchDatauserprofile();
    //this.fetchDatauserproject();
    this.fetchDatauserfeature();
  }
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Project`,
    formEditData: `${environment.baseUrl}/meta/UpdateProjectCommand`,
    title:"Project"
  };
  


  fetchDatauserprofile(): void {
    this.http.get<any[]>(`${environment.baseUrl}/api/Skills/user-Skills/`+this.userId)
      .pipe(
        flatMap((data: any[]) => {
          this.skillList.next(data);
          this.totalSkills = this.skillList.value.length;
          this.updatePagedSkillList();
          return this.skillList;
        })
      )
      .subscribe();
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
  
  

  // fetchDatauserproject(): void {
  //   this.http.get<any[]>("https://localhost:44312/api/Project/user-projects/"+this.userId).subscribe(
  //     (data: any[]) => {
  //       this.projectList.next(data);
  //     }
  //   );
  // }
  fetchDatauserfeature(): void {
    this.http.get<any[]>(`${environment.baseUrl}/api/Feature/user-features/`+this.userId).subscribe(
      (data: any[]) => {
        this.featureList.next(data);
      }
    );
    }
  openAddSkillDialog(): void {
    const dialogRef = this.dialog.open(AddSkillDialogComponent, {
      width: '60%',
      height: '95%',
      maxWidth: '100%',
      maxHeight: '100%',
      data: { skillList: this.skillList }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            const body = { userId: this.userId, skillId: result[i].id, rate: result[i].value };
            const url = `${environment.baseUrl}/api/Skills/addskillToUser`;
            this.http.post(url, body).subscribe(response => {
                console.log(response);
                this.fetchDatauserprofile();
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
    const skill = this.skillList.getValue()[index+(this.currentPageIndex*this.pageSize)];
  
    // Call the delete skill endpoint
    const url = `${environment.baseUrl}/api/Skills/removeskillToUser`;
    const body = { userId: this.userId, skillId: skill.id };
    this.http.post(url,body).subscribe(
      () => {
        // If the skill is deleted successfully, remove it from the skill list
        const updatedList = this.skillList.getValue().filter((s, i) => i !== index+(this.currentPageIndex*this.pageSize));
        //this.skillList.next(updatedList);
        this.fetchDatauserprofile();
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

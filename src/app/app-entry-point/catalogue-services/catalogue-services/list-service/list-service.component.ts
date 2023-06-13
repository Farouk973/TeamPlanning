import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AssignUnaasignProjectComponent } from 'src/app/app-entry-point/project-managment/list-projects-management/assign-unaasign-project/assign-unaasign-project.component';
import { DetailsProjectComponent } from 'src/app/app-entry-point/project-managment/list-projects-management/details-project/details-project.component';
import { environment } from 'src/environments/environment';
import { Actionpanel, GridAction } from 'src/shared/generic/models/ActionPanel.model';
import { CardGridView } from 'src/shared/generic/models/CardView.model';
import { Project } from 'src/shared/models/project.model';
import { ProjectService } from 'src/shared/services/project.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  projects: Project[]
  inputSearch: string='';
  constructor(public projectService : ProjectService , public dialog: MatDialog , private router : Router ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  openDialog( p ) {
    const dialogRef = this.dialog.open(DetailsProjectComponent , {
      data: {p}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toStepper() {
    this.router.navigate(['stepper/project'])
  }

  actionAffect:GridAction = {
    actionThtitle :"Assign to project",
    Compoment : AssignUnaasignProjectComponent
  }

  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Service?parameterValue=1`,
    formEditData: `${environment.baseUrl}/meta/UpdateProjectCommand`,
    title:"Project",
    actions:[this.actionAffect]
  };


  card: CardGridView = {
    endpoint: `${environment.baseUrl}/api/Service?parameterValue=1`,
    formdata: `${environment.baseUrl}/meta/CreateRoleCommand`,
    metadata: `${environment.baseUrl}/meta/GetProjectsDetailViewModel`,
    cardtitle: "bodyTitle",
    carddescription: "textbody",
    cardInfo:"category",
    width: 300,
    height: 150,
    actionPanel: this.action,
  };
}

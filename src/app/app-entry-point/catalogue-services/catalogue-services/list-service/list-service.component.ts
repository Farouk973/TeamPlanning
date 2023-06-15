import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AssignUnaasignProjectComponent } from 'src/app/app-entry-point/project-managment/list-projects-management/assign-unaasign-project/assign-unaasign-project.component';
import { DetailsProjectComponent } from 'src/app/app-entry-point/project-managment/list-projects-management/details-project/details-project.component';
import { environment } from 'src/environments/environment';
import { Actionpanel, GridAction } from 'src/shared/generic/models/ActionPanel.model';
import { CardGridView } from 'src/shared/generic/models/CardView.model';
import { DialogComponent } from 'src/shared/generic/nxm-dialog/dialog/dialog.component';
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

  // actionAffect:GridAction = {
  //   actionThtitle :"Assign to project",
  //   Compoment : AssignUnaasignProjectComponent
  // }

  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Service`,
    formEditData: `${environment.baseUrl}/meta/UpdateServiceCommand`,
    title:"Services Cataloque",
//    actions:[this.actionAffect]
  };


  card: CardGridView = {
    endpoint: `${environment.baseUrl}/api/Service`,
    formdata: `${environment.baseUrl}/meta/UpdateServiceCommand`,
    metadata: `${environment.baseUrl}/meta/GetServiceListVm`,
    cardtitle: "bodyTitle",
    carddescription: "textbody",
    cardInfo:"category",
    width: 300,
    height: 150,
    actionPanel: this.action,
    filterOption :  ["Marketing" , "Operations" , "Sales" , "HR" , "Finance"]
  };


  config = {
    endpoint: `${environment.baseUrl}/api/Service`,
    metadata: `${environment.baseUrl}/meta/GetServiceListVm`,
    formdata: `${environment.baseUrl}/meta/CreateServiceCommand `,
    formeditdata: `${environment.baseUrl}/meta/UpdateServiceCommand`,

  };

  openDialogA(metaData: any, isUpdate: boolean, endpoint: any ): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1067px',
      height: '519px',
      data: { metaData, isUpdate, endpoint,title:'Services catalogue'},


    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}

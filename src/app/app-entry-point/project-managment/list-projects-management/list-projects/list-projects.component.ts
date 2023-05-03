import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../../../shared/services/project.service";
import {Project} from "../../../../../shared/models/project.model";
import {MatDialog} from "@angular/material/dialog";
import {DetailsProjectComponent} from "../details-project/details-project.component";
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Router} from "@angular/router";
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { CardGridView } from 'src/shared/generic/models/CardView.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {
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



  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Project`,
    formEditData: `${environment.baseUrl}/meta/UpdateProjectCommand`,
    title:"Project"
  };


  card: CardGridView = {
    endpoint: `${environment.baseUrl}/api/Project`,
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
}

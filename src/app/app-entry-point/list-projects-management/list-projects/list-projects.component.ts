import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../../shared/services/project.service";
import {Project} from "../../../../shared/models/project.model";
import {MatDialog} from "@angular/material/dialog";
import {DetailsProjectComponent} from "../details-project/details-project.component";
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {
  projects: Project[]
  inputSearch: string='';
  myControl = new FormControl();
  searchForm: FormGroup;
  filteredOptions: Observable<string[]>;
  constructor(public projectService : ProjectService , public dialog: MatDialog , private router : Router ) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data)=>{
      this.projects=data
      console.log(this.projects)
    })
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.projects.map(n=>n.name).filter(option => option.toLowerCase().includes(filterValue));
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
}

import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../../../shared/services/project.service";
import {Location} from "@angular/common";
import {Project} from "../../../../../shared/models/project.model";

@Component({
  selector: 'app-planning-project',
  templateUrl: './planning-project.component.html',
  styleUrls: ['./planning-project.component.css']
})
export class PlanningProjectComponent implements OnInit {

  project : Project

  constructor(public projectService : ProjectService , private location : Location) { }

  ngOnInit(): void {
    const url = this.location.path();
    let id = url.substring(url.lastIndexOf('/') + 1);
    this.projectService.getProject(id).subscribe((data) => {
      this.project = data;
    })
    console.log(this.project)
  }

}

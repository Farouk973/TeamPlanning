import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Project} from "../../../../shared/models/project.model";
import {ProjectService} from "../../../../shared/services/project.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-recop-project',
  templateUrl: './recop-project.component.html',
  styleUrls: ['./recop-project.component.css']
})
export class RecopProjectComponent implements  OnChanges {
  panelOpenState = false;
  project! : Project;
   @Input() order ;
  @Input() formData;
  @Input() chiffrage;
  @Input() submitType;
  constructor( public projectService : ProjectService , private location : Location) {

  }
  ngOnChanges(changes: SimpleChanges) {
    const url = this.location.path();
    let id = url.substring(url.lastIndexOf('/') + 1);
      this.projectService.getProject(id).subscribe((data) => {
        this.project = data;
      })

    }



}

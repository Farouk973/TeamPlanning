import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Project} from "../../../../shared/models/project.model";
import {ProjectService} from "../../../../shared/services/project.service";
import {Location} from "@angular/common";
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-recop-project',
  templateUrl: './recop-project.component.html',
  styleUrls: ['./recop-project.component.css']
})
export class RecopProjectComponent implements  OnChanges {
  panelOpenState = false;
  project! : Project;
   @Input() order ;
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

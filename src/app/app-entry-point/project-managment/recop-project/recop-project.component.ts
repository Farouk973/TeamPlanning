import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Project} from "../../../../shared/models/project.model";
import {ProjectService} from "../../../../shared/services/project.service";
import {Location} from "@angular/common";
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-recop-project',
  templateUrl: './recop-project.component.html',
  styleUrls: ['./recop-project.component.css']
})
export class RecopProjectComponent implements OnInit {
  panelOpenState = false;
  project! : Project;

  constructor( public projectService : ProjectService,private cookieService: CookieService,private location: Location) { }


  ngOnInit(): void {
   let id=  this.cookieService.get('idResponse');
    console.log("id",id)
    this.projectService.getProject(id).subscribe((data) => {
      this.project = data;
    })

  }

}

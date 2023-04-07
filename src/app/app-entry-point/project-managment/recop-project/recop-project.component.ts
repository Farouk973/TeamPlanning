import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../../shared/models/project.model";
import {ProjectService} from "../../../../shared/services/project.service";
@Component({
  selector: 'app-recop-project',
  templateUrl: './recop-project.component.html',
  styleUrls: ['./recop-project.component.css']
})
export class RecopProjectComponent implements OnInit {
  panelOpenState = false;
  idProject!: any
  project! : Project;
  @Input() set showItem(id :any) {
    this.showProject(id);
    console.log('idItem',id)
  }
  constructor( public projectService : ProjectService) { }


  ngOnInit(): void {

  }

  showProject(id :any){
   this.projectService.getProject(id).subscribe((data)=>{
      this.project=data;
      console.log(this.project)
    })
  }

}

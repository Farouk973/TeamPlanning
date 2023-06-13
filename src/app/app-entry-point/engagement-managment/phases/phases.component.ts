import { Component, Inject, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { GridView } from 'src/shared/generic/models/GridView.model';
import { ID } from 'src/shared/generic/nxm-dialog/actiondialog/actiondialog.component';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.css']
})
export class PhasesComponent implements OnInit {
  @Input() id ;

  constructor(@Inject(ID) public idinjected: string) { }

  ngOnInit(): void {
    this.id = this.id || this.idinjected;
  }
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Phase`,
    formEditData: `${environment.baseUrl}/meta/UpdatePhaseCommand`,
  };
  
  grid: GridView = {
    endpoint: `${environment.baseUrl}/api/Phase/`+this.idinjected,
    formdata: `${environment.baseUrl}/meta/GetPhasesByEngagmentQueriesVm`,
    metadata: `${environment.baseUrl}/meta/GetPhasesByEngagmentQueriesVm`,
    allowedSortColumns: ['title'],
    actionPanel: this.action,
  
  };
}
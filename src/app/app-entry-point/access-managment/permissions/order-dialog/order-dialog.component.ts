import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SelectOrder } from 'src/shared/generic/models/SelectOrder.model';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  select : SelectOrder = {
    endpointData : `${environment.baseUrl}/api/Permission`,
    endpointAction : `${environment.baseUrl}/api/Permission/ordre`,
    InterfaceName : 'change menu order',
    TaskSelectCollumn : 'name',
  };

}

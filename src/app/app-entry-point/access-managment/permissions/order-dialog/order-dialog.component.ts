import { Component, OnInit } from '@angular/core';
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
    endpointData : 'https://localhost:44312/api/Permission',
    endpointAction : 'https://localhost:44312/api/Permission/ordre',
    InterfaceName : 'change menu order',
    TaskSelectCollumn : 'name',
  };

}

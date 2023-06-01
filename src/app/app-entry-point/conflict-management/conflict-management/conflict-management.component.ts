import { Component, OnInit } from '@angular/core';
import { requestconflictmockDataTable } from '../requestconflict.data';

@Component({
  selector: 'app-conflict-management',
  templateUrl: './conflict-management.component.html',
  styleUrls: ['./conflict-management.component.css']
})
export class ConflictManagementComponent implements OnInit {
  request =  requestconflictmockDataTable;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/shared/models/permission.model';
import { PermissionService } from 'src/shared/services/permission.service';
export interface PeriodicElement {
  name: string;
  title: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})

export class PermissionsComponent implements OnInit {
  menu!: Permission[];
 
  constructor(private permissionService: PermissionService,
     ) 
          { }

  ngOnInit() {
    this.getMenu();
   }
  getMenu() {
    this.permissionService.getMenu().subscribe({
      next: (data) => {
        this.menu = data;
      },
    })
  }
}

  
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
 
  constructor(private permissionService: PermissionService,private fb: FormBuilder
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

  config = {
    endpoint: 'https://localhost:44312/api/Permission',
    metadata: 'https://localhost:44312/meta/GetPermissionListVm',
    formdata: 'https://localhost:44312/meta/CreatePermissionCommand',
    formeditdata: 'https://localhost:44312/meta/UpdatePermissionCommand',
    pageSize: 2,
    title: 'Project Management',
    icon: 'https://img.freepik.com/premium-vector/vector-creative-project-icon-flat-style_106427-199.jpg?w=2000',
    allowedSortColumns: ['title'],
  };
}

  
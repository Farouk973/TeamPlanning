import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Permission } from 'src/shared/models/permission.model';
import { PermissionService } from 'src/shared/services/permission.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {
  showMenu = false;
  menu!: Permission[];

  constructor(    private permissionService: PermissionService ) 
  {
  }

  ngOnInit() {
    this.getMenu();
   }

  getMenu() {
    this.permissionService.getMenu().subscribe({
      next: (data) => {
        this.menu = data;
        console.log(this.menu)
      },
    })
  }

}

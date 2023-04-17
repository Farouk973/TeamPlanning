import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
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
  userId : any;
  constructor(private permissionService: PermissionService,
              private router: Router,
              public oidcSecurityService: OidcSecurityService) 
  {
    this.oidcSecurityService.checkAuth()
    .subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
     this.userId = userData.sub;
     console.log(this.userId)
    });
  }

  ngOnInit() {

    this.getMenu();
   }

  getMenu() {
    this.permissionService.getMenuUser(this.userId).subscribe({
      next: (data) => {
        this.menu = data;
        console.log(this.menu)
      },
    })
  }

  redirectItem(route : any){
    this.router.navigate([route])
  }

}

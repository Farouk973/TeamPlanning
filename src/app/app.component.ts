import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { AccountService } from 'src/shared/services/account.service';
import { PermissionService } from 'src/shared/services/permission.service';
// import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'team-planning';
  isAuthenticated = false;
  constructor(public oidcSecurityService: OidcSecurityService,
              public accountSerivice: AccountService,private permissionService: PermissionService
    ) {
     this.oidcSecurityService.checkAuth()
     .subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
       if (!isAuthenticated) {
         this.login();
       } else {
         console.log('current user:', userData);
         this.isAuthenticated = true;
         this.accountSerivice.connectedUser.next(userData);
        this.permissionService.updateVariable(userData.sub);
       }
     });
    this.isAuthenticated = true;
    
  }
  ngOnInit() {}

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => (this.isAuthenticated = false));
  }
}

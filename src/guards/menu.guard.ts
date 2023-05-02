import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map, Observable } from 'rxjs';
import { childRoutes } from 'src/app/app-entry-point/child-routes';

import { environment } from 'src/environments/environment';
import { User } from 'src/shared/models/user.model';
import { UserService } from 'src/shared/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class MenuGuard implements CanActivate  {
    routes = childRoutes;
    menu: any[] = [];
    id:any;
    currentUser : User = new User ();
    listePath: string[] =[]
    constructor
        ( private userService: UserService,
            public oidcSecurityService: OidcSecurityService,
            public router: Router) {
                this.oidcSecurityService.checkAuth()
                .subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
                 this.id = userData.sub
                });
                this.userService.getUser(this.id).subscribe(user => {
                    this.currentUser = user;
                    console.log(this.currentUser.permission);
                  
                    for (let objet of this.currentUser.permission) {
                      for (let item of objet.items) {
                        this.listePath.push(item.path);
                      }
                    }

                  });
             }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
            
        return this.oidcSecurityService.checkAuth()
            .pipe(
                map(({ isAuthenticated, userData, accessToken, idToken }) => {
                    let path = next.data;
                    console.log(state)
                    const found = this.listePath?.find(m => m == state['url']);
                    console.log(state['url'])
                    console.log(found)
                    if (found == undefined) {
                        this.router.navigateByUrl('/');
                        return false;
                    } else {
                        return true;
                    }
                })
            )
    }
}
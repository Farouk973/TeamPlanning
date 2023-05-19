import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {NotificationService} from "../../../../shared/services/notification.service";


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();
  notification : string;
  connectedUserId : string;
  userId: string;

  constructor(
    private router: Router,
    public oidcSecurityService: OidcSecurityService ,private notificationService : NotificationService
    ) {

  }

  ngOnInit() {
    this.notificationService.getNewNotification().subscribe((notification : string)=>{
      // this.notifications.push(notification)
      const indice =notification.indexOf("auth0|");
      this.notification = notification.substring(0, indice);
      this.connectedUserId = notification.substring(indice);
      console.log('connected',this.connectedUserId)
    })
    this.oidcSecurityService.checkAuth()
      .subscribe(({userData,  }) => {
        this.userId = userData.sub;
        console.log(this.userId)

      });

  }

  toggleSidebar() {
    this.sideNavToggled.emit();
  }
  onLoggedout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }
  onReddirectProfile(){
    this.router.navigate(['/dashboard/profile']);
  }


}

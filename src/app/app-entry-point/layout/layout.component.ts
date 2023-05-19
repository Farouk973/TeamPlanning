import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {NotificationService} from "../../../shared/services/notification.service";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;
  notification : string;
  connectedUserId : string;
  userId: string;
  private readonly mediaWatcher: Subscription;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private _snackBar: MatSnackBar ,media: MediaObserver ,   public oidcSecurityService: OidcSecurityService ,private notificationService : NotificationService
  ) {
    this.mediaWatcher = media.asObservable().subscribe((changes) => {
      changes.forEach(change => {
        if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
          if (this.sideNavOpened) {
            this.sideNavOpened = false;
          }
          this.sideNavMode = 'over';
        } else {
          this.sideNavOpened = true;
          this.sideNavMode = 'side';
        }
        if (change.mqAlias === 'xs') {
          this.toolBarHeight = 56;
        } else {
          this.toolBarHeight = 64;
        }
      });
    });
  }
  ngOnInit() {
    this.notificationService.getNewNotification().subscribe((notification : string)=>{
      // this.notifications.push(notification)
      const indice =notification.indexOf("auth0|");
      this.notification = notification.substring(0, indice);
      this.connectedUserId = notification.substring(indice);
      console.log('connected',this.connectedUserId)
      this.openSnackBar(this.notification , this.connectedUserId);
    })
    this.oidcSecurityService.checkAuth()
      .subscribe(({userData,  }) => {
        this.userId = userData.sub;
        console.log(this.userId)

      });

  }
  openSnackBar(notif : any , userId : any) {
    if(this.userId == userId){
    this._snackBar.open(notif, 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });}
  }
  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }
}

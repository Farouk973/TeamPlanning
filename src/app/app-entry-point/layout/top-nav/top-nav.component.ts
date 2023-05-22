import {Component, OnInit, Output, EventEmitter, ElementRef} from '@angular/core';
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
  audio: HTMLAudioElement;
  constructor(
    private router: Router,
    public oidcSecurityService: OidcSecurityService ,private notificationService : NotificationService ,private elementRef: ElementRef
    ) {
    this.audio = new Audio();
    this.audio.src = 'assets/sonnerie.wav';
    this.audio.load();
  }

  ngOnInit() {
    this.oidcSecurityService.checkAuth()
      .subscribe(({userData,  }) => {
        this.userId = userData.sub;
      });
    this.notificationService.getNewNotification().subscribe((notification : string)=>{
      // this.notifications.push(notification)
      const indice =notification.indexOf("auth0|");
      this.notification = notification.substring(0, indice);
      this.connectedUserId = notification.substring(indice);

      const iconElement = this.elementRef.nativeElement.querySelector('.example-icon');
      if(this.notification !== undefined && this.connectedUserId === this.userId){
        iconElement.classList.add('icon');
       // this.playNotificationSound();
        this.audio.play()
        setTimeout(() => {
          iconElement.classList.remove('icon');
        }, 3000);
      }
    })


  }
 playNotificationSound() {

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

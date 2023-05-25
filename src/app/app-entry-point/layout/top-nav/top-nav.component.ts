import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  Input,
  SimpleChanges,
  OnChanges,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {NotificationService} from "../../../../shared/services/notification.service";
import {Notification} from "../../../../shared/models/notification";


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();
   notification : string ;
  connectedUserId : string;
  userId: string;
  audio: HTMLAudioElement;
  notifications : Notification [];
  notifCount : number ;

  currentDate: Date;
  dbDate: Date;
  dateDifference: string;

  constructor(
    private router: Router,
    public oidcSecurityService: OidcSecurityService ,private notificationService : NotificationService ,
    private elementRef: ElementRef ,private cdr: ChangeDetectorRef
    ) {
    this.audio = new Audio();
    this.audio.src = 'assets/sonnerie.wav';
    this.audio.load();
    this.currentDate = new Date();

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
        this.audio.play()
        this.notifCount = this.notifCount +1;
        setTimeout(() => {
          iconElement.classList.remove('icon');
        }, 6000);
      }
    })

    this.notificationService.getNotificationsByUserId(this.userId).subscribe((response : any)=>{
      this.notifications = response
      this.notifCount = this.notifications.length;
    })

  }
  calculateDateDifference(date: string): string {
    const currentDate = new Date();
    const dbDate = new Date(date);

    const differenceMs = currentDate.getTime() - dbDate.getTime();

    // Calcul de la différence en secondes, minutes, heures, jours et mois
    const differenceSeconds = Math.floor(differenceMs / 1000);
    const differenceMinutes = Math.floor(differenceSeconds / 60);
    const differenceHours = Math.floor(differenceMinutes / 60);
    const differenceDays = Math.floor(differenceHours / 24);
    const differenceMonths = Math.floor(differenceDays / 30);

    // Construction de la chaîne de différence
    let differenceString = '';

    if (differenceMonths > 0) {
      differenceString = `${differenceMonths} months ago`;
    } else if (differenceDays > 0) {
      differenceString = `${differenceDays} days ago`;
    } else if (differenceHours > 0) {
      differenceString = `${differenceHours} hours ago`;
    } else if (differenceMinutes > 0) {
      differenceString = `${differenceMinutes} minutes ago`;
    } else {
      differenceString = `${differenceSeconds} seconds ago`;
    }

    return differenceString;
  }

  deleteNotification(id) {
    this.notificationService.deleteNotification(id).subscribe((response)=>{
      this.notificationService.getNotificationsByUserId(this.userId).subscribe((response : any)=>{
        this.notifications = response
        this.notifCount = this.notifications.length;
      })
    })
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

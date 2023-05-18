import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {NotificationService} from "../../../../shared/services/notification.service";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  //@ViewChild('form') form: NgForm;
  newNotification$: Observable<string>;
  notifications : string;

  users:any [];
  constructor(private notificationService : NotificationService , private http : HttpClient) { }

  ngOnInit(): void {

   this.notificationService.getNewNotification().subscribe((notification : string)=>{
   // this.notifications.push(notification)
    this.notifications = notification
    })

  }

  On( i : string) {
   // const { notification} = this.form.value;
    console.log('hhhh', i)
    this.notificationService.sendNotification(i)
  }
}

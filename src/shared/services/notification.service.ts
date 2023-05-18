import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  constructor(private socket : Socket) {}

  sendNotification(notification: string): void {
    this.socket.emit('sendNotification',notification);
  }
  getNewNotification(): Observable<string> {
    return this.socket.fromEvent<string>('newNotification');
  }
}

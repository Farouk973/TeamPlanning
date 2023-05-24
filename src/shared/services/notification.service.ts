import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";
import {HttpRepositoryService} from "../../core/httpRepository.service";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private baseUrl = environment.baseUrlMs;
    private BASE_URI = 'api/notification';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private socket : Socket ,private httpRepositoryService: HttpRepositoryService, private http : HttpClient) {}

  sendNotification(notification: string , userId: string): void {
    this.socket.emit('sendNotification',{ notification, userId });
  }
  getNewNotification(): Observable<string> {
    return this.socket.fromEvent<string>('newNotification');
  }

  addNotificationsToUser(data: any) {
    return this.http.post(`${this.baseUrl}/${(this.BASE_URI)}/addNotif`, data, this.httpOptions)
  }


  getNotificationsByUserId(userId: string) {
    return this.http.get(`${this.baseUrl}/${(this.BASE_URI)}/notifsUser/${userId}`, this.httpOptions)
  }

  deleteNotification(id: string) {
    return this.http.delete(`${this.baseUrl}/${(this.BASE_URI)}/deleteNotif/${id}`, this.httpOptions)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardDialogService {

  constructor(private http: HttpClient) {}
  getGardData(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>("https://localhost:44312/meta/GetUserDetailViewModel");

  }
}

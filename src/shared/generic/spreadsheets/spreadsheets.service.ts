import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class SpreadsheetsService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.baseUrl;


  getItem(endpoint: string,idItem: string ): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`+ endpoint +`/${idItem}`);
  }
}

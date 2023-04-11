import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class GenericStepperService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  deleteItem(endpoint: string,idItem: string ): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}`+ endpoint +`/${idItem}`,this.httpOptions);
  }


}

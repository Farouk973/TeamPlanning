import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AutoCompleteService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.baseUrl;
  getDataOptions(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`+endpoint);
  }

  getIdLastItem(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`+endpoint);
  }

  assignToItem(endpoint: string,idItem: string ,idAdded: string ): Observable<any> {
    return this.http.options<any>(`${this.baseUrl}`+ endpoint +`/${idItem}`+ `/${idAdded}`);
  }

  getItem(endpoint: string,idItem: string ): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`+ endpoint +`/${idItem}`);
  }


  addToBase(endpoint: string,object: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`+endpoint, object);
  }

  deleteOptionAfterAssignToItem(endpoint: string,idItem: string ,idUnassigned: string ): Observable<any> {
    return this.http.options<any>(`${this.baseUrl}`+ endpoint +`/${idItem}`+ `/${idUnassigned}`);
  }
}

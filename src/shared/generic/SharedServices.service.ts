import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColumnMetadata } from './models/ColumnMetadata.model';

@Injectable({providedIn: 'root'})
export class SharedServices {
  constructor(private httpClient: HttpClient) { }

  getData(endpoint: string): Observable<any[]> {
    return this.httpClient.get<any[]>(endpoint);
  }
  getMetadata(modelName: string): Observable<ColumnMetadata[]> {
    return this.httpClient.get<ColumnMetadata[]>(modelName);
  }
  addRow(endpoint: any,object: any): Observable<any> {
    return this.httpClient.post<any>(endpoint, object);
  }
  updateRow(endpoint:any,object:any):Observable<any>{
    return this.httpClient.put<any>(endpoint,object);
  }
  deleteRow(endpoint: string, id: number): Observable<number> {
    return this.httpClient.delete<number>(endpoint + '/' + id);
  }
}

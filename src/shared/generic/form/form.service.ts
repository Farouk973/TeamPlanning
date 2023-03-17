import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}
  getMetadata(modelName: string): Observable<ColumnMetadata[]> {
    return this.http.get<ColumnMetadata[]>(modelName);
  }
  addRow(endpoint: any,object: any): Observable<any> {
    return this.http.post<any>(endpoint, object);
  }
  updateRow(endpoint:any,object:any):Observable<any>{
    return this.http.put<any>(endpoint,object);
  }
}

export interface ColumnMetadata {
  name: string;
  type: string;
  format: string;
  maxLength?: number;
  minLength?: number;
  minimum?: number;
  maximum?: number;
  references?: string[] | null;
  description?: string ;
  item?: string ; //add the type of array items
}

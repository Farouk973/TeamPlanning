import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

type ColumnType = 'string' | 'number' | 'boolean' | 'object';

export interface GridData {
  // columns: string[];
  rows: any[];
  //columnTypes: { [key: string]: ColumnType };
}
export interface ColumnMetadata {
  name: string;
  type: string;
  format: string;
}

@Injectable({
  providedIn: 'root',
})
export class GridviewService {
  constructor(private http: HttpClient) {}
  getGridData(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>(endpoint);
   
  }
  getMetadata(modelName: string): Observable<ColumnMetadata[]> {
    return this.http.get<ColumnMetadata[]>(modelName);
  }
  deleteRow(endpoint: string, id: number): Observable<number> {
    return this.http.delete<number>(endpoint + '/' + id);
  }
  updateRow(endpoint: string, object: any): Observable<any> {
    return this.http.put<any>(endpoint, object);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, of, switchMap, tap } from 'rxjs';
import { Apiresponse, endpoints } from '../models/domain.model';
import { Metadata } from '../models/bigdomain.model';

@Injectable({
  providedIn: 'root'
})
export class servicechipsservice {
  private dataSubject = new Subject<any>();
  sendData(data: any) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
  constructor(private http: HttpClient) { }

  // A method to get the API metadata
  getApiData(metadataEndpoint: string): Observable<Apiresponse> {
    return this.http.get<Apiresponse>(metadataEndpoint);
  }

  // A method to get the endpoints
  getEndpoints(): Observable<endpoints> {
    return this.http.get<endpoints>('assets/categoriesCG.json');
  }
}







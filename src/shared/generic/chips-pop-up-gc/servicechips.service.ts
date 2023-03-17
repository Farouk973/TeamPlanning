import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apiresponse, endpoints } from '../models/domain.model';

@Injectable({
  providedIn: 'root'
})
export class servicechipsservice {

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
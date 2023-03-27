import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutoCompleteService {
  constructor(private http: HttpClient) {}
  getDataOptions(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>(endpoint);
  }

  getIdLastItem(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>(endpoint);
  }

  assignToItem(endpoint: any,idItem: string ,object: any): Observable<any> {
    return this.http.post<any>(endpoint+`/${idItem}`, object);
  }


  addToBase(endpoint: any,object: any): Observable<any> {
    return this.http.post<any>(endpoint, object);
  }
}

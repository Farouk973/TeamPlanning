import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Card } from './Models/cardModel';


@Injectable({
  providedIn: 'root',
})
export class GenericCardService {

  constructor(private http: HttpClient) {}
  

  updateCard(endpoint:string,card:Card): Observable<Card> {
    return this.http.put<Card>(`${endpoint}/${card.id}`, card)
  }

  deleteCard(endpoint:string,card:Card): Observable<any> {
    return this.http.delete<Card>(`${endpoint}/${card.id}`);
  }
  }


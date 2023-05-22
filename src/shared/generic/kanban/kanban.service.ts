import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  constructor(private http: HttpClient) { }

  updateTaskStatus(endpoint: string, object: any): Observable<any> {
    console.log("eeeeeeeeeeeeeeeeeee")
    return this.http.put<any>(endpoint, object);
  }

  private actionSubject = new Subject<void>();
  private variableSubject = new Subject<string>();

  action$ = this.actionSubject.asObservable();
  variable$ = this.variableSubject.asObservable();

  lancerAction(variable: string): void {
    this.actionSubject.next();
    this.variableSubject.next(variable);
  }
}

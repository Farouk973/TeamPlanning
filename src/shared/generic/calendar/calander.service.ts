import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalanderService {
    private actionSubject = new Subject<void>();
    private variableSubject = new Subject<string>();
  
    action$ = this.actionSubject.asObservable();
    variable$ = this.variableSubject.asObservable();
 
    lancerAction(variable: string): void {
      this.actionSubject.next();
      this.variableSubject.next(variable);
    }
  }
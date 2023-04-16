import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomCellStateService {
  private state: {[key: string]: any} = {};

  constructor() { }

  getState(key: string): any {
    return this.state[key];
  }

  setState(key: string, value: any): void {
    this.state[key] = value;
  }

}

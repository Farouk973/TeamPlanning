import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private database: IDBDatabase;

  constructor(private http: HttpClient) {
    this.openDatabase();
  }

  private openDatabase() {
    const request = window.indexedDB.open('my-database', 1);

    request.onerror = (event) => {
      console.error('Failed to open database', event);
    };

    request.onsuccess = (event) => {
      this.database = request.result;
      console.log('Database opened successfully');
    };

    request.onupgradeneeded = (event) => {
      const database = (event.target as IDBRequest).result;

      const store = database.createObjectStore('my-data', { keyPath: 'id' });

      console.log('Database upgraded successfully');
    };
  }

  public saveData(data: any[]): Observable<any> {
    const transaction = this.database.transaction(['my-data'], 'readwrite');
    const store = transaction.objectStore('my-data');
  
    data.forEach((item) => {
      store.put(item);
    });
  
    return new Observable<any>((observer) => {
      transaction.oncomplete = (event) => {
        console.log('Data saved successfully');
        observer.next(data);
        observer.complete();
      };
  
      transaction.onerror = (event) => {
        console.error('Failed to save data', event);
        observer.error(event);
      };
    });
  }
  
  public loadData(): Observable<any[]> {
    const transaction = this.database.transaction(['my-data'], 'readonly');
    const store = transaction.objectStore('my-data');
    const request = store.getAll();

    return new Observable<any[]>((observer) => {
      request.onsuccess = (event) => {
        const data = (event.target as IDBRequest).result;
        console.log('Data loaded successfully');
        observer.next(data);
        observer.complete();
      };

      request.onerror = (event) => {
        console.error('Failed to load data', event);
        observer.error(event);
      };
    });
  }

 
}

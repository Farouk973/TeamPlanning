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
      store.createIndex('id', 'id');
      console.log('Database upgraded successfully');
    };
  }

  public saveData(index: number, dataArray: any[]): Observable<any> {
  const transaction = this.database.transaction(['my-data'], 'readwrite');
  const store = transaction.objectStore('my-data');
  
  store.put({ id: index, data: dataArray });

  return new Observable(observer => {
    transaction.oncomplete = event => {
      console.log('Data saved successfully');
      observer.next(dataArray);
      observer.complete();
    };

    transaction.onerror = event => {
      console.error('Failed to save data', event);
      observer.error(event);
    };
  });
}

  
public getData(id: number): Observable<any> {
  const transaction = this.database.transaction(['my-data'], 'readonly');
  const store = transaction.objectStore('my-data');
  
  const index = store.index('id');

  const request = index.get(id);

  return new Observable(observer => {
    request.onsuccess = (event:Event) => {
      const result =(event.target as IDBRequest).result;

      if (result) {
        observer.next(result.data);
      } else {
        observer.error(`No data found with ID ${id}`);
      }

      observer.complete();
    };

    request.onerror = event => {
      console.error(`Failed to retrieve data with ID ${id}`, event);
      observer.error(event);
    };
  });
}





 
}

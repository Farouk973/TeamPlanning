import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpRepositoryService } from 'src/core/httpRepository.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private BASE_URI = 'api/Permission';

  private variableUpdatedSource = new Subject<any>();
  variableUpdated$ = this.variableUpdatedSource.asObservable();

  updateVariable(value: any) {
    this.variableUpdatedSource.next(value);
  }

  constructor(private httpRepositoryService: HttpRepositoryService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getMenu() {
    return this.httpRepositoryService.get<any>(`${this.BASE_URI}`);
}
getMenuUser(id : any) {
  return this.httpRepositoryService.get<any>(`${this.BASE_URI}`+"/user-permessions/"+id);
}
}

import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private BASE_URI = 'api/Permission';

  constructor(private httpRepositoryService: HttpRepositoryService) { }
  getMenu() {
    return this.httpRepositoryService.get<any>(`${this.BASE_URI}`);
}
}

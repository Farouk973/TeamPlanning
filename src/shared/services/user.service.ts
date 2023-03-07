import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URI = 'api/Users';

  constructor(private httpRepositoryService: HttpRepositoryService) { }

  getUser(userId: string) {
    return this.httpRepositoryService.get<any>(`${this.BASE_URI}/${userId}`);
  }
  updateImage(userId: string,imageData :any) {
    return this.httpRepositoryService.patch<any>(`${this.BASE_URI}/${userId}`,imageData)
  }
}

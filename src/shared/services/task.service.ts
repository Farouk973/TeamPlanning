import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private BASE_URI = 'api/Task';

  constructor(private httpRepositoryService: HttpRepositoryService) { }

  getTask(id: string) {
    return this.httpRepositoryService.get<any>(`${this.BASE_URI}/get-task/${id}`);
  }

  getRequest(id: string) {
    return this.httpRepositoryService.get<any>(`api/RequestManagement/${id}`);
  }

}

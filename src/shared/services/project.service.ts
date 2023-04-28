import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private PROJECT = 'api/Project/get-project';
  constructor(private httpRepositoryService: HttpRepositoryService) { }

  getProject(projectId: any) {
    return this.httpRepositoryService.get<any>(`${this.PROJECT}/${projectId}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private PROJECT = 'api/Project/get-project';
  private PROJECTS = 'api/Project/get-projects';
  constructor(private httpRepositoryService: HttpRepositoryService) { }

  getProject(projectId: any) {
    return this.httpRepositoryService.get<any>(`${this.PROJECT}/${projectId}`);
  }

  getProjects() {
    return this.httpRepositoryService.get<any>(`${this.PROJECTS}`);
  }
}

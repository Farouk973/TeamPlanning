import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  connectedUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private BASE_URI = 'api/users';

  constructor(private httpRepositoryService: HttpRepositoryService) { }


}

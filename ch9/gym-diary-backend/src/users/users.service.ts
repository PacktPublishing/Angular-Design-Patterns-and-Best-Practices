import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersRepositoryService } from './repository/users-repository.service';
import { User, UsersAPI } from './interface/users.interface';

@Injectable()
export class UsersService {
  constructor(private usersRepositoryService: UsersRepositoryService) {}

  getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<UsersAPI> {
    return this.usersRepositoryService.getAll(search, page, pageSize);
  }

  getOne(id: string): Observable<User> {
    return this.usersRepositoryService.getOne(id);
  }

  getByUserName(username: string): Observable<User> {
    return this.usersRepositoryService.getByUserName(username);
  }
}

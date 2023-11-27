import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User, UsersAPI } from '../interface/users.interface';

@Injectable()
export abstract class UsersRepositoryService {
  abstract getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<UsersAPI>;
  abstract getOne(id: string): Observable<User>;
  abstract getByUserName(username: string): Observable<User>;
}

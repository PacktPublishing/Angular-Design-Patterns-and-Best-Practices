import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, map } from 'rxjs';
import { User } from 'src/users/interface/users.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  signIn(username: string, password: string): Observable<any> {
    return this.usersService.getByUserName(username).pipe(
      map((user) => {
        if (user?.password !== password) {
          throw new UnauthorizedException();
        }
        const payload = { username: user.username, sub: user.id };
        const access_token = this.jwtService.sign(payload);
        return { access_token };
      }),
    );
  }
}

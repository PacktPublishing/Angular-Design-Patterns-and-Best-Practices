import { ApiPropertyOptional } from '@nestjs/swagger';
import { User } from '../interface/users.interface';

export class CreateUsersDto implements User {
  @ApiPropertyOptional()
  id: string;

  @ApiPropertyOptional()
  username: string;

  @ApiPropertyOptional()
  password: string;

  @ApiPropertyOptional()
  name: string;
}

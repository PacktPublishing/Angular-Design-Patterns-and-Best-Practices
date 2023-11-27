import { ApiProperty } from '@nestjs/swagger';
import { UsersAPI } from '../interface/users.interface';
import { CreateUsersDto } from './create-users.dto';

export class GetUsersDTO implements UsersAPI {
  @ApiProperty()
  hasNext: boolean;

  @ApiProperty({ type: () => [CreateUsersDto] })
  items: Array<CreateUsersDto>;
}

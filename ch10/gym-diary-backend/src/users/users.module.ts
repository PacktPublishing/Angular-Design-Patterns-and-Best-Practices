import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepositoryService } from './repository/users-repository.service';
import { UsersRepositoryMemoryService } from './repository/users-repository-memory.service';

const repositoryProvider = {
  provide: UsersRepositoryService,
  useClass: UsersRepositoryMemoryService,
};

@Module({
  providers: [UsersService, repositoryProvider],
  exports: [UsersService],
})
export class UsersModule {}

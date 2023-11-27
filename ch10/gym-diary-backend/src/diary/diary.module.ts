import { Module } from '@nestjs/common';
import { DiaryRepositoryService } from './repository/diary-repository.service';
import { DiaryRepositoryMemoryService } from './repository/diary-repository-memory.service';
import { DiaryController } from './diary.controller';
import { DiaryService } from './exercises.service';

const repositoryProvider = {
  provide: DiaryRepositoryService,
  useClass: DiaryRepositoryMemoryService,
};

@Module({
  controllers: [DiaryController],
  providers: [DiaryService, repositoryProvider],
  exports: [DiaryService],
})
export class DiaryModule {}

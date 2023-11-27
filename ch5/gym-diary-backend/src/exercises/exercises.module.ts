import { Module } from '@nestjs/common';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import { ExerciseRepositoryService } from './repository/exercises-repository.service';
import { ExercisesRepositoryMemoryService } from './repository/exercises-repository-memory.service';

const repositoryProvider = {
  provide: ExerciseRepositoryService,
  useClass: ExercisesRepositoryMemoryService,
};

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService, repositoryProvider],
  exports: [ExercisesService],
})
export class ExercisesModule {}

import { Injectable } from '@nestjs/common';
import { ExerciseRepositoryService } from './repository/exercises-repository.service';
import { Exercise, ExercisesAPI } from './interface/exercises.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ExercisesService {
  constructor(private exerciseRepositoryService: ExerciseRepositoryService) {}

  getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<ExercisesAPI> {
    return this.exerciseRepositoryService.getAll(search, page, pageSize);
  }

  getOne(id: string): Observable<Exercise> {
    return this.exerciseRepositoryService.getOne(id);
  }
}

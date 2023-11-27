import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Exercise, ExercisesAPI } from '../interface/exercises.interface';

@Injectable()
export abstract class ExerciseRepositoryService {
  abstract getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<ExercisesAPI>;
  abstract getOne(id: string): Observable<Exercise>;
  abstract insert(exercise: Exercise): Observable<Exercise>;
  abstract update(id: string, exercise: Exercise): Observable<Exercise>;
  abstract delete(id: string): boolean;
}

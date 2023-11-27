import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { getCollection, getItem } from '../../utils/utils';

import { ExerciseRepositoryService } from './exercises-repository.service';
import { exercises } from '../db/exercises.data';
import { Exercise, ExercisesAPI } from '../interface/exercises.interface';

@Injectable()
export class ExercisesRepositoryMemoryService extends ExerciseRepositoryService {
  exercises = exercises;
  getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<ExercisesAPI> {
    return of(getCollection(this.exercises, search, page, pageSize));
  }

  getOne(id: string): Observable<Exercise> {
    return of(getItem(id, this.exercises));
  }
}

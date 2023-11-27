import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { getCollection, getItem } from '../../utils/utils';

import { ExerciseRepositoryService } from './exercises-repository.service';
import { exercises } from '../db/exercises.data';
import { Exercise, ExercisesAPI } from '../interface/exercises.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class ExercisesRepositoryMemoryService extends ExerciseRepositoryService {
  exercises = exercises;
  getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<ExercisesAPI> {
    const desc = true;
    return of(getCollection(this.exercises, search, page, pageSize, desc));
  }

  getOne(id: string): Observable<Exercise> {
    return of(getItem(id, this.exercises));
  }

  insert(exercise: Exercise): Observable<Exercise> {
    let { id } = exercise;
    id = id ? id : randomUUID();

    return this.upsert(id, exercise);
  }

  private upsert(id: string, exercise: Exercise): Observable<Exercise> {
    const line = this.exercises.findIndex((item) => item.id === id);
    const newItem = { ...exercise, id };

    if (line >= 0) {
      this.exercises[line] = newItem;
    } else {
      this.exercises = [...this.exercises, newItem];
    }

    return of(getItem(id, this.exercises));
  }

  update(id: string, exercise: Exercise): Observable<Exercise> {
    return this.upsert(id, exercise);
  }

  delete(id: string): boolean {
    this.exercises = this.exercises.filter((item) => item.id !== id);
    return true;
  }
}

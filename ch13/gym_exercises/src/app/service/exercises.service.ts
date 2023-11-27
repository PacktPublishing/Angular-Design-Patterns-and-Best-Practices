import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Exercise, ExerciseList, ExerciseListAPI } from '../exercise';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService {
  private httpClient = inject(HttpClient);

  private url = 'http://localhost:3000/exercises';

  getExercises(): Observable<ExerciseList> {
    return this.httpClient
      .get<ExerciseListAPI>(`${this.url}`)
      .pipe(map((api) => api?.items));
  }

  addExercises(exercises: Partial<Exercise>): Observable<Exercise> {
    return this.httpClient.post<Exercise>(this.url, exercises);
  }
}

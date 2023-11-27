import { Injectable, inject } from '@angular/core';
import {
  ExerciseSet,
  ExerciseSetList,
  ExerciseSetListAPI,
} from '../interfaces/exercise-set';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciseSetsService {
  private httpClient = inject(HttpClient);
  private url = 'http://localhost:3000/diary';

  getInitialList(): Observable<ExerciseSetListAPI> {
    return this.httpClient.get<ExerciseSetListAPI>(this.url);
  }

  refreshList(): Observable<ExerciseSetListAPI> {
    return this.httpClient.get<ExerciseSetListAPI>(this.url);
  }

  addNewItem(item: Partial<ExerciseSet>): Observable<ExerciseSet> {
    return this.httpClient.post<ExerciseSet>(this.url, item);
  }

  deleteItem(id: string): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.url}/${id}`);
  }

  updateItem(id: string, item: Partial<ExerciseSet>): Observable<ExerciseSet> {
    return this.httpClient.put<ExerciseSet>(`${this.url}/${id}`, item);
  }

  getItem(id: string): Observable<ExerciseSet> {
    return this.httpClient.get<ExerciseSet>(`${this.url}/${id}`);
  }
}

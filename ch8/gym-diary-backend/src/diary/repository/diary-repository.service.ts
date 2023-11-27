import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DiariesAPI, Diary } from '../interface/diary.interface';

@Injectable()
export abstract class DiaryRepositoryService {
  abstract getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<DiariesAPI>;
  abstract getOne(id: string): Observable<Diary>;
  abstract insert(diary: Diary): Observable<Diary>;
  abstract update(id: string, diary: Diary): Observable<Diary>;
  abstract delete(id: string): boolean;
}

import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { getCollection, getItem } from '../../utils/utils';
import { DiaryRepositoryService } from './diary-repository.service';
import { diaries } from '../db/diary.data';
import { DiariesAPI, Diary } from '../interface/diary.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class DiaryRepositoryMemoryService extends DiaryRepositoryService {
  diaries = diaries;

  insert(diary: Diary): Observable<Diary> {
    let { id } = diary;
    id = id ? id : randomUUID();

    return this.upsert(id, diary);
  }

  private upsert(id, diary: Diary): Observable<Diary> {
    const line = this.diaries.findIndex((item) => item.id === id);
    const newItem = { ...diary, id };

    if (line >= 0) {
      this.diaries[line] = newItem;
    } else {
      this.diaries = [...this.diaries, newItem];
    }

    return of(getItem(id, this.diaries));
  }

  update(id: string, diary: Diary): Observable<Diary> {
    return this.upsert(id, diary);
  }

  delete(id: string): boolean {
    this.diaries = this.diaries.filter((item) => item.id !== id);
    return true;
  }

  getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<DiariesAPI> {
    return of(getCollection(this.diaries, search, page, pageSize));
  }

  getOne(id: string): Observable<Diary> {
    return of(getItem(id, this.diaries));
  }
}

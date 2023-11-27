import { Injectable } from '@nestjs/common';

import { Observable } from 'rxjs';

import { DiaryRepositoryService } from './repository/diary-repository.service';
import { DiariesAPI, Diary } from './interface/diary.interface';

@Injectable()
export class DiaryService {
  constructor(private diaryRepositoryService: DiaryRepositoryService) {}

  getAll(
    search?: string,
    page?: string,
    pageSize?: string,
  ): Observable<DiariesAPI> {
    return this.diaryRepositoryService.getAll(search, page, pageSize);
  }

  getOne(id: string): Observable<Diary> {
    return this.diaryRepositoryService.getOne(id);
  }

  insert(diary: Diary) {
    return this.diaryRepositoryService.insert(diary);
  }

  delete(id: string) {
    return this.diaryRepositoryService.delete(id);
  }

  update(id: string, diary: Diary) {
    return this.diaryRepositoryService.update(id, diary);
  }
}

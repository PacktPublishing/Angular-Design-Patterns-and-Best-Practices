import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ExerciseSetsService } from './exercise-sets.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ExerciseSet, ExerciseSetListAPI } from '../interfaces/exercise-set';

describe('ExerciseSetsService', () => {
  let service: ExerciseSetsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    service = TestBed.inject(ExerciseSetsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use the method getInitialList to return the list of entries', fakeAsync(() => {
    const fakeBody: ExerciseSetListAPI = {
      hasNext: false,
      items: [
        {
          id: '1',
          date: new Date(),
          exercise: 'Deadlift',
          reps: 15,
          sets: 4,
        },
      ],
    };

    service.getInitialList().subscribe((response) => {
      expect(response).toEqual(fakeBody.items);
    });

    const request = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });

    request.flush(fakeBody);

    tick();
  }));

  it('should use the method addNewItem to add a new Entry', fakeAsync(() => {
    const fakeBody: ExerciseSet = {
      id: '1',
      date: new Date(),
      exercise: 'Deadlift',
      reps: 15,
      sets: 4,
    };
    service.addNewItem(fakeBody).subscribe((response) => {
      expect(response).toEqual(fakeBody);
    });
    const request = httpMock.expectOne((req) => {
      return req.method === 'POST';
    });

    request.flush(fakeBody);

    tick();
  }));
});

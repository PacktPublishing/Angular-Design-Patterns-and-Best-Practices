import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { diaryResolver } from './diary.resolver';
import { ExerciseSetList } from './interfaces/exercise-set';

describe('diaryResolver', () => {
  const executeResolver: ResolveFn<ExerciseSetList> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => diaryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

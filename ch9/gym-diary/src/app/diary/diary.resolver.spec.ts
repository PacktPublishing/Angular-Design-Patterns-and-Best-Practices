import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { diaryResolver } from './diary.resolver';

describe('diaryResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => diaryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

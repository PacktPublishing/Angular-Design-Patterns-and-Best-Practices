import { TestBed } from '@angular/core/testing';

import { ExerciseSetsService } from './exercise-sets.service';

describe('ExerciseSetsService', () => {
  let service: ExerciseSetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseSetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

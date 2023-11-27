import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryFormReactiveComponent } from './new-entry-form-reactive.component';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ExercisesService } from '../services/exercises.service';

describe('NewEntryFormReactiveComponent', () => {
  let component: NewEntryFormReactiveComponent;
  let fixture: ComponentFixture<NewEntryFormReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEntryFormReactiveComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        ExerciseSetsService,
        {
          provide: ExerciseSetsService,
          useValue: jasmine.createSpyObj('ExerciseSetsService', [
            'addNewItem',
            'updateItem',
          ]),
        },
        ExercisesService,
        {
          provide: ExercisesService,
          useValue: jasmine.createSpyObj('ExercisesService', ['getExercises']),
        },
      ],
    });
    fixture = TestBed.createComponent(NewEntryFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

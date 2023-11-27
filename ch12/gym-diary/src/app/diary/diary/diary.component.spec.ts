import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { DiaryComponent } from './diary.component';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ListEntriesComponent } from '../list-entries/list-entries.component';
import { NewItemButtonComponent } from '../new-item-button/new-item-button.component';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { ExerciseSet } from '../interfaces/exercise-set';
import { NewEntryFormReactiveComponent } from '../new-entry-form-reactive/new-entry-form-reactive.component';

describe('DiaryComponent', () => {
  let component: DiaryComponent;
  let fixture: ComponentFixture<DiaryComponent>;
  let exerciseSetsService: ExerciseSetsService;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DiaryComponent,
        ListEntriesComponent,
        NewItemButtonComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'home/diary/entry/:id',
            component: NewEntryFormReactiveComponent,
          },
        ]),
      ],
      providers: [
        ExerciseSetsService,
        {
          provide: ExerciseSetsService,
          useValue: jasmine.createSpyObj('ExerciseSetsService', ['deleteItem']),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DiaryComponent);
    exerciseSetsService = TestBed.inject(ExerciseSetsService);
    location = TestBed.inject(Location);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should direct to diary entry edit route', fakeAsync(() => {
    const set: ExerciseSet = {
      date: new Date(),
      exercise: 'test',
      reps: 6,
      sets: 6,
      id: '1',
    };

    component.editEntry(set);

    tick();

    expect(location.path()).toBe('/home/diary/entry/1');
  }));

  it('should call delete method when the button delete is clicked', fakeAsync(() => {
    exerciseSetsService.deleteItem = jasmine.createSpy().and.returnValue(of());

    component.deleteItem('1');

    tick();

    expect(exerciseSetsService.deleteItem).toHaveBeenCalledOnceWith('1');
  }));
});

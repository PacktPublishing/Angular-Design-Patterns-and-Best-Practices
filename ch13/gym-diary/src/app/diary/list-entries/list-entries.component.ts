import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ExerciseSet } from '../interfaces/exercise-set';
import { EntryItemComponent } from '../entry-item/entry-item.component';
import { ExerciseSetsService } from '../services/exercise-sets.service';

@Component({
  selector: 'app-list-entries',
  standalone: true,
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css'],
  imports: [EntryItemComponent],
})
export class ListEntriesComponent {
  @Output() editEvent = new EventEmitter<ExerciseSet>();
  @Output() deleteEvent = new EventEmitter<string>();

  private exerciseSetsService = inject(ExerciseSetsService);
  exerciseList = this.exerciseSetsService.exerciseList;
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';

@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css'],
})
export class ListEntriesComponent {
  @Input() exerciseList!: ExerciseSetList;
  @Output() editEvent = new EventEmitter<ExerciseSet>();
  @Output() deleteEvent = new EventEmitter<string>();
  

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }
}

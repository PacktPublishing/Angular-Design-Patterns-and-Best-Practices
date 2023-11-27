import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseSet } from '../interfaces/exercise-set';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entry-item',
  standalone: true,
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css'],
  imports: [DatePipe],
})
export class EntryItemComponent {
  @Input('exercise-set') exerciseSet?: ExerciseSet;
  @Output() editEvent = new EventEmitter<ExerciseSet>();
  @Output() deleteEvent = new EventEmitter<string>();

  delete() {
    this.deleteEvent.emit(this.exerciseSet?.id);
  }

  editEntry() {
    this.editEvent.emit(this.exerciseSet);
  }
}

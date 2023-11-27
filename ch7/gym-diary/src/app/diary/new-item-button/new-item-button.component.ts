import { Component, EventEmitter, Output } from '@angular/core';
import { ExerciseSet } from '../interfaces/exercise-set';

@Component({
  selector: 'app-new-item-button',
  templateUrl: './new-item-button.component.html',
  styleUrls: ['./new-item-button.component.css'],
})
export class NewItemButtonComponent {
  @Output() newExerciseEvent = new EventEmitter<ExerciseSet>();

  addNewExercise() {
    const id = Date.now().toString();
    const date = new Date();
    const reps = 10;
    const sets = 4;
    const exercise = 'Leg Press';

    const newExerciseSet: ExerciseSet = { id, date, reps, sets, exercise };
    this.newExerciseEvent.emit(newExerciseSet);
  }
}

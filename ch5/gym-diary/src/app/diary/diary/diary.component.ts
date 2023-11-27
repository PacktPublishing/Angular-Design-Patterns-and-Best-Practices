import { Component, OnInit, inject } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets.service';

@Component({
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);
  exerciseList!: ExerciseSetList;

  ngOnInit(): void {
    this.exerciseSetsService
      .getInitialList()
      .subscribe((dataApi) => (this.exerciseList = dataApi.items));
  }

  newList() {
    this.exerciseSetsService
      .refreshList()
      .subscribe((dataApi) => (this.exerciseList = dataApi.items));
  }

  addExercise(newSet: ExerciseSet) {
    this.exerciseSetsService.addNewItem(newSet).subscribe((exerciseSet) => {
      this.exerciseList = [...this.exerciseList, exerciseSet];
    });
  }

  deleteItem(id: string) {
    this.exerciseSetsService.deleteItem(id).subscribe(() => {
      this.exerciseList = this.exerciseList.filter(
        (exerciseSet) => exerciseSet.id !== id
      );
    });
  }

  newRep(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';
    this.exerciseSetsService.updateItem(id, updateSet).subscribe();
  }
}

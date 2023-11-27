import { Component, OnInit, inject } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  exerciseList!: ExerciseSetList;

  ngOnInit(): void {
    this.route.data.subscribe(({ exerciseList }) => {
      this.exerciseList = exerciseList;
    });
  }

  newList() {
    this.exerciseSetsService
      .refreshList()
      .subscribe((exerciseList) => (this.exerciseList = exerciseList));
  }

  addExercise(newSet: ExerciseSet) {
    this.router.navigate(['/home/diary/entry']);
  }

  deleteItem(id: string) {
    this.exerciseSetsService.deleteItem(id).subscribe(() => {
      this.exerciseList = this.exerciseList.filter(
        (exerciseSet) => exerciseSet.id !== id
      );
    });
  }

  editEntry(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';
    this.router.navigate([`/home/diary/entry/${id}`]);
  }
}

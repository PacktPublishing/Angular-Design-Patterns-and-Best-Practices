import { Component, OnInit, computed, inject } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListEntriesComponent } from '../list-entries/list-entries.component';
import { NewItemButtonComponent } from '../new-item-button/new-item-button.component';

@Component({
  standalone: true,
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
  imports: [ListEntriesComponent, NewItemButtonComponent],
})
export class DiaryComponent implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);

  volume = computed<number>(() =>
    this.exerciseSetsService
      .exerciseList()
      .reduce(
        (volume, exerciseSet) => volume + exerciseSet.reps * exerciseSet.sets,
        0
      )
  );

  ngOnInit(): void {
    this.exerciseSetsService.getInitialList();
  }

  deleteItem(id: string) {
    this.exerciseSetsService.deleteItem(id);
  }

  addExercise(newSet: ExerciseSet) {
    this.router.navigate(['/home/diary/entry']);
  }

  editEntry(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';
    this.router.navigate([`/home/diary/entry/${id}`]);
  }
}

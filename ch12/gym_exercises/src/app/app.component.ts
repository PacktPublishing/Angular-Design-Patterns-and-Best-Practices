import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ExercisesService } from './service/exercises.service';
import { ExerciseList } from './exercise';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  private exerciseService = inject(ExercisesService);

  exerciseList$ = this.exerciseService.getExercises();

  public entryForm = this.formBuilder.group({
    description: ['', Validators.required],
  });

  newExercise() {
    if (this.entryForm.valid) {
      const newExercise = { ...this.entryForm.value };

      this.exerciseService
        .addExercises(newExercise)
        .subscribe(
          (_) => (this.exerciseList$ = this.exerciseService.getExercises())
        );
    }
  }
}

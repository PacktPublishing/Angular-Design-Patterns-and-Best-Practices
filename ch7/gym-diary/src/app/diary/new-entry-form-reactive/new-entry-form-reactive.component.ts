import { Component, Input, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { multipleValidator } from './custom-validation';
import { ExerciseSet } from '../interfaces/exercise-set';

@Component({
  selector: 'app-new-entry-form-reactive',
  templateUrl: './new-entry-form-reactive.component.html',
  styleUrls: ['./new-entry-form-reactive.component.css'],
})
export class NewEntryFormReactiveComponent implements OnInit {
  @Input('id') entryId?: string;

  private formBuilder = inject(NonNullableFormBuilder);
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public entryForm = this.formBuilder.group({
    date: [new Date(), Validators.required],
    exercise: ['', Validators.required],
    sets: [0, [Validators.required, Validators.min(0), multipleValidator(2)]],
    reps: [0, [Validators.required, Validators.min(0), multipleValidator(3)]],
  });

  ngOnInit(): void {
    if (this.entryId) {
      this.route.data.subscribe(({ entry }) => {
        this.updateForm(entry);
      });
    }
  }

  updateForm(entry: ExerciseSet): void {
    let { id: _, ...entryForm } = entry;
    this.entryForm.setValue(entryForm);
  }

  newEntry() {
    if (this.entryForm.valid) {
      const newEntry = { ...this.entryForm.value };
      if (this.entryId) {
        this.exerciseSetsService
          .updateItem(this.entryId, newEntry)
          .subscribe((entry) => this.router.navigate(['/home']));
      } else {
        this.exerciseSetsService
          .addNewItem(newEntry)
          .subscribe((entry) => this.router.navigate(['/home']));
      }
    }
  }
}

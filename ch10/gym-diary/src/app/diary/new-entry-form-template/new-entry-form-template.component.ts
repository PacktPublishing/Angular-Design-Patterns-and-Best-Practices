import { Component, OnInit, inject } from '@angular/core';
import { ExerciseSet } from '../interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-entry-form-template',
  templateUrl: './new-entry-form-template.component.html',
  styleUrls: ['./new-entry-form-template.component.css'],
})
export class NewEntryFormTemplateComponent implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  private titleService = inject(Title);

  entry: ExerciseSet = { date: new Date(), exercise: '', reps: 0, sets: 0 };

  ngOnInit(): void {
    this.titleService.setTitle('Template Form');
  }

  newEntry() {
    const newEntry = { ...this.entry };
    this.exerciseSetsService
      .addNewItem(newEntry)
      .subscribe((entry) => this.router.navigate(['/home']));
  }
}

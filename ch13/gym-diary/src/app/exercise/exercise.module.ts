import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { ExerciseComponent } from './exercise/exercise.component';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  declarations: [ExerciseComponent],
  imports: [CommonModule, LazyElementsModule, ExerciseRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExerciseModule {}

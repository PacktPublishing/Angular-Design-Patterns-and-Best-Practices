import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'diary',
        loadChildren: () =>
          import('../diary/diary.module').then((file) => file.DiaryModule),
      },
      {
        path: 'exercise',
        loadChildren: () =>
          import('../exercise/exercise.module').then(
            (file) => file.ExerciseModule
          ),
      },
      {
        path: '',
        redirectTo: 'diary',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

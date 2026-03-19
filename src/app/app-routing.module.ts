import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { TrainingListsComponent } from './components/training-lists/training-lists.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: TrainingListsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

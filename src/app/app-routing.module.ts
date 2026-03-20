import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { TrainingListsComponent } from './components/training-lists/training-lists.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: TrainingListsComponent },
  { path: 'list/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinylCoversListComponent } from './components/lists/vinyl-covers-list/vinyl-covers-list.component';

const routes: Routes = [
  { path: '', component: VinylCoversListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

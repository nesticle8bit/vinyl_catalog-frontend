import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinylCoversListComponent } from './components/lists/vinyl-covers-list/vinyl-covers-list.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: VinylCoversListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

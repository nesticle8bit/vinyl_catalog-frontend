import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinylCoversListComponent } from './components/lists/vinyl-covers-list/vinyl-covers-list.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SocialComponent } from './components/layout/social/social.component';

const routes: Routes = [
  { path: '', redirectTo: '/social', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'social', component: SocialComponent, children: [
      { path: '', component: VinylCoversListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinylCoversListComponent } from './components/lists/vinyl-covers-list/vinyl-covers-list.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SocialComponent } from './components/layout/social/social.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/social', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'social', component: SocialComponent, children: [
      { path: '', component: VinylCoversListComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

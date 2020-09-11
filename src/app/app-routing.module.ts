import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinylCoversListComponent } from './components/lists/vinyl-covers-list/vinyl-covers-list.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SocialComponent } from './components/layout/social/social.component';
import { AuthGuard } from './guards/auth.guard';
import { CommunityComponent } from './components/pages/community/community.component';
import { CommunityAddComponent } from './components/pages/community/community-add/community-add.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { DataPrivacyComponent } from './components/pages/data-privacy/data-privacy.component';
import { ManageAccountComponent } from './components/pages/manage-account/manage-account.component';
import { CommunityViewComponent } from './components/pages/community/community-view/community-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/social', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'social', component: SocialComponent, children: [
      { path: '', component: VinylCoversListComponent, canActivate: [AuthGuard] },
      { path: 'community', component: CommunityComponent, canActivate: [AuthGuard] },
      { path: 'community/create', component: CommunityAddComponent, canActivate: [AuthGuard] },
      { path: 'community/:url', component: CommunityViewComponent, canActivate: [AuthGuard] },

      { path: 'manage-account', component: ManageAccountComponent, canActivate: [AuthGuard] },

      { path: 'terms-and-conditions', component: TermsAndConditionsComponent, canActivate: [AuthGuard] },
      { path: 'data-privacy', component: DataPrivacyComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

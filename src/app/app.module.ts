import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { VinylCoversListComponent } from './components/lists/vinyl-covers-list/vinyl-covers-list.component';
import { DialogAddVinylComponent } from './components/dialogs/dialog-add-vinyl/dialog-add-vinyl.component';
import { HeaderComponent } from './components/layout/header/header.component';

import { ILastFMService } from './services/interfaces/lastFM.interface';
import { LastFMService } from './services/implementations/lastFM.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IVinylService } from './services/interfaces/vinyl.interface';
import { VinylService } from './services/implementations/vinyl.service';
import { LoginComponent } from './components/pages/login/login.component';
import { SocialComponent } from './components/layout/social/social.component';
import { DialogRegisterComponent } from './components/dialogs/security/dialog-register/dialog-register.component';
import { ISecurityService } from './services/interfaces/security.interface';
import { SecurityService } from './services/implementations/security.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    VinylCoversListComponent,
    DialogAddVinylComponent,
    HeaderComponent,
    LoginComponent,
    SocialComponent,
    DialogRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgSelectModule,
    MatTooltipModule
  ],
  providers: [
    { provide: ILastFMService, useClass: LastFMService },
    { provide: IVinylService, useClass: VinylService },
    { provide: ISecurityService, useClass: SecurityService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }
}

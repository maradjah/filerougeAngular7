import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormateurComponent } from './formateur/formateur.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { HomeComponent } from './home/home.component';

import {httpInterceptorProviders} from './auth/auth-interceptors';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EtudiantDetailComponent } from './etudiant-detail/etudiant-detail.component';
import { NotAuthorizedPageComponent } from './not-authorized-page/not-authorized-page.component';
import {AuthService} from './auth/auth.service';
import { WidgetDataComponent } from './admin/admin-home/widget-data/widget-data.component';
import { TopBarComponent } from './admin/admin-home/page-setup/top-bar/top-bar.component';
import { SideBarComponent } from './admin/admin-home/page-setup/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    EtudiantComponent,
    FormateurComponent,
    PersonnelComponent,
    HomeComponent,
    EtudiantListComponent,
    EtudiantDetailComponent,
    NotAuthorizedPageComponent,
    WidgetDataComponent,
    TopBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

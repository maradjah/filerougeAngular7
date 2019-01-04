import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EtudiantComponent} from './etudiant/etudiant.component';
import {FormateurComponent} from './formateur/formateur.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PersonnelComponent} from './personnel/personnel.component';
import {NotAuthorizedPageComponent} from './not-authorized-page/not-authorized-page.component';
import {AdminGuard} from './services/guards/admin.guard';
import {AuthGuardService} from './services/guards/auth-guard.service';
import {EtudiantGuard} from './services/guards/etudiant.guard';
import {FormateurGuard} from './services/guards/formateur.guard';
import {PersonnelGuard} from './services/guards/personnel.guard';
import {LoginRoleGuard} from './services/guards/login-role.guard';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'etudiant',
    component: EtudiantComponent,
    canActivate: [AuthGuardService, EtudiantGuard]
  },
  {
    path: 'formateur',
    component: FormateurComponent,
    canActivate: [AuthGuardService, FormateurGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService, AdminGuard]
  },
  {
    path: 'personnel',
    component: PersonnelComponent,
    canActivate: [AuthGuardService, PersonnelGuard]
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [LoginRoleGuard]
  },
  {
    path: 'signup',
    component: RegisterComponent,
    canActivate: [LoginRoleGuard]
  },
  {
    path: 'denied',
    component: NotAuthorizedPageComponent
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

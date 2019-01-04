import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRoleGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      if ((sessionStorage.getItem('AuthAuthorities').toString() === '[{"authority":"ROLE_ADMIN"}]')) {
        this.router.navigateByUrl('/admin');
        return false;
      } else if ((sessionStorage.getItem('AuthAuthorities').toString() === '[{"authority":"ROLE_ETUDIANT"}]')) {
        this.router.navigateByUrl('/etudiant');
        return false;
      } else if ((sessionStorage.getItem('AuthAuthorities').toString() === '[{"authority":"ROLE_FORMATEUR"}]')) {
        this.router.navigateByUrl('/formateur');
        return false;
      } else if ((sessionStorage.getItem('AuthAuthorities').toString() === '[{"authority":"ROLE_PERSONNEL"}]')) {
        this.router.navigateByUrl('/personnel');
        return false;
      }
    } else {
      return true;
    }
  }


}

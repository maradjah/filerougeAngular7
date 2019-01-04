import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {AuthService} from '../../auth/auth.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ((sessionStorage.getItem('AuthAuthorities').toString() === '[{"authority":"ROLE_ADMIN"}]')) {
      return true;
    } else {
      this.router.navigateByUrl('/denied');
    }
  }


}

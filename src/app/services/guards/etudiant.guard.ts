import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EtudiantGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  if ((sessionStorage.getItem('AuthAuthorities').toString() === '[{"authority":"ROLE_ETUDIANT"}]')) {
    return true;
  } else {
    this.router.navigateByUrl('/denied');
  }
}


}

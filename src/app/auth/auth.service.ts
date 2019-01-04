import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginInfo} from './login-info';
import {Observable} from 'rxjs';
import {JwtResponse} from './jwt-response';
import {SignupInfo} from './signup-info';
import {TokenStorageService} from './token-storage.service';
import {Router} from '@angular/router';

const  httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  roles: string[] = [];

  constructor(private http: HttpClient, private token: TokenStorageService, private router: Router) {

  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignupInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  isAdmin() {
    this.roles = this.token.getAuthorities();
    this.roles.every(role => {
      console.log('----------> ROLE: ' + role);
      if (role === 'ROLE_ADMIN') {
        console.log('true');
        return true;
      } else {
        return false;
      }
    });
  }

  clear(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('AuthToken') != null && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    return false;
  }

  logout(): void {
    this.clear();
    this.router.navigate(['/auth/login']);
  }
}

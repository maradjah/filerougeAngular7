import { Component, OnInit } from '@angular/core';
import {AuthLoginInfo} from '../auth/login-info';
import {TokenStorageService} from '../auth/token-storage.service';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  userRole: string = '';
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.roles = this.tokenStorage.getAuthorities();
        this.roles.every(role => {
          if (role === 'ROLE_ADMIN') {
            this.userRole = 'admin';
            this.router.navigateByUrl('/admin');
            window.location.reload();
            return false;
          } else if (role === 'ROLE_ETUDIANT') {
            this.userRole = 'etudiant';
            this.router.navigateByUrl('/etudiant');
            window.location.reload();
            return false;
          } else if (role === 'ROLE_FORMATEUR') {
            this.userRole = 'formateur';
            this.router.navigateByUrl('/formateur');
            window.location.reload();
            return false;
          }  else if (role === 'ROLE_PERSONNEL') {
            this.userRole = 'personnel';
            this.router.navigateByUrl('/personnel');
            window.location.reload();
            return false;
          } else {
            return true;
          }
        });

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  logout() {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/auth/login');
  }
  onGoToSignup() {
    this.router.navigateByUrl('/signup');
  }
}

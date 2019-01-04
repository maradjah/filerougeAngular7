import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignupInfo } from '../auth/signup-info';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignupInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {
      this.roles.push(this.form.role.toString().toLowerCase());
      this.signupInfo = new SignupInfo(
      this.form.name,
      this.form.prenom,
      this.form.username,
      this.form.email,
      this.form.password,
      this.roles);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  onGoToLogin() {
    this.router.navigateByUrl('/auth/login');
  }
}

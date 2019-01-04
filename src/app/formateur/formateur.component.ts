import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  board: string;
  errorMessage: string;

  constructor(private userService: UserService, private token: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.userService.getFormateurBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
  logout() {
    this.token.signOut();
    this.router.navigateByUrl('auth/login');
  }

}

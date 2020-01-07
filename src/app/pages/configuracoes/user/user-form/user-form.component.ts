import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  user: firebase.User;
  pageTitle: string;

  constructor(
    private authService: AuthService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.init();
  }

  init() {
     this.pageTitle = 'Minhas Informações';
     this.authService.authState$.subscribe(user => this.user = user);
  }

  updateEmail() {
    this.userService.updateUserEmail('');
  }

}

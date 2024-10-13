import { Component } from '@angular/core';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { LoginButtonComponent } from './login-button/login-button.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginButtonComponent, LogoutButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor() {}
}

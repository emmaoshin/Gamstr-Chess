import { Component } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.scss'
})
export class LogoutButtonComponent {

  logout() {
    localStorage.removeItem('authToken');
    console.log('Logged out successfully');
  }
}

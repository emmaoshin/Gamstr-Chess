import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-button',
  standalone: true,
  providers: [HttpClient],
  imports: [],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss',
})
export class LoginButtonComponent {
  constructor(private http: HttpClient) {}

  login() {
    const credentials = { username: 'testuser', password: 'password' };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      }),
    };
    this.http
      .post('https://localhost:7001/api/Auth/login', credentials, httpOptions)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          console.log('Login successful, Token:', response.token);
          // Store the token and use it for subsequent requests
          localStorage.setItem('authToken', response.Token);
        },
        error: (err) => {
          console.error('Login failed:', err);
        },
      });
  }
}

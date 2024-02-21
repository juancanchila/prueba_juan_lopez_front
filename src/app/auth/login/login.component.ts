import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/authservice.service'; // Import your authentication service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Implement login logic
    const username = 'admin';
    const password = 'admin';
    this.authService.login(username, password); // Call login method from AuthService
    this.router.navigate(['/dashboard']);
  }
}

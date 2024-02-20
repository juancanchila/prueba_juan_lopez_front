// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../interfaces/user.interface'; // Import User interface

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) {}

  login() {
    // Implement login logic
    const user: User = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
      token: 'token123'
    };
    this.userService.setUser(user);
    this.router.navigate(['/dashboard']);
  }
}

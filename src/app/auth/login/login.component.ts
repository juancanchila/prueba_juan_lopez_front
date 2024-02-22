import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loginError: string = ''; // Variable to hold login error message

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // Initialize loginForm using FormBuilder
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    // Reset loginError
    this.loginError = '';

    // Log the form value when the form is submitted
    console.log("Form submitted with values:", this.loginForm.value);

    // Uncomment this section to execute your login logic
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe({
      next: () => {
        // Navigate to home page after successful login
        this.router.navigate(['/home']);
      },
      error: (err) => {
        // Handle login error
        console.error('Login error:', err);
        this.loginError = 'Invalid username or password'; // Set loginError message
      }
    });
  }
}

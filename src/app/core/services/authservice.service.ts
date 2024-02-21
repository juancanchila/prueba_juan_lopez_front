import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface'; // Import the User interface

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>; // Subject to hold the current user
  public user: Observable<User | null>; // Observable to subscribe to changes in the current user

  constructor() {
    // Initialize the currentUserSubject with an initial value of null
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    // Assign the user observable to the currentUserSubject as an observable
    this.user = this.currentUserSubject.asObservable();
  }

  // Simulate login with username and password
  login(username: string, password: string): void {
    // Check if the username and password match the hardcoded credentials
    if (username === 'admin' && password === 'admin') {
      // If they match, create a user object
      const user: User = {
        id: 1,
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin',
        token: 'dummy-token',
        profilePic: 'assets/images/users/1.jpg'
      };
      // Update the currentUserSubject with the authenticated user
      this.currentUserSubject.next(user);
    } else {
      // If the credentials are incorrect, update the currentUserSubject with null
      this.currentUserSubject.next(null);
    }
  }

  // Simulate logout by setting the currentUserSubject to null
  logout(): void {
    this.currentUserSubject.next(null);
  }
}

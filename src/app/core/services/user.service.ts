// user.service.ts
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null;

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User | null {
    return this.user;
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  logout() {
    this.user = null;
  }

  getToken(): string | null {
    return this.user ? this.user.token : null;
  }

  getRole(): string | null {
    return this.user ? this.user.role : null;
  }

  getName(): string | null {
    return this.user ? this.user.name : null;
  }

  getEmail(): string | null {
    return this.user ? this.user.email : null;
  }
}

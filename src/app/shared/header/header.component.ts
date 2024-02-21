import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/authservice.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User | null = null;
  isSideMenuOpen: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  toggleSideMenu(): void {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  ngOnInit(): void {
    this.authService.user.subscribe((user: User | null) => {
      this.user = user;
    });
  }

  onLogoutClick(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

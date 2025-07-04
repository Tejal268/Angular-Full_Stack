import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Auth } from '../../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [RouterOutlet],
  styleUrls: ['./sidebar.css'],
  standalone: true,
  
})
export class Sidebar {
  constructor(private auth: Auth, private router: Router) {}

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  getRole(): string | null {
    return this.auth.getUserRole();
  }
}

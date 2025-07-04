import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  constructor(private router: Router) {}

  isAuthPage(): boolean {
    const noLayoutPages = ['/', '/login', '/register', '/officer-login', '/officer-register'];
    return noLayoutPages.includes(this.router.url);
  }
}

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  constructor(private router: Router) {}

  goToUser(): void {
    this.router.navigate(['/login']);
  }

  goToOfficer(): void {
    this.router.navigate(['/officer-login']);
  }

}

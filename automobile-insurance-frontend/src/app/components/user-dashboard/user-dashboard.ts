import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Navbar } from '../shared-layout/navbar/navbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.html',
    imports: [CommonModule, RouterModule, HttpClientModule, Navbar], 
  styleUrls: ['./user-dashboard.css']
})
export class UserDashboard {

  constructor(private http: HttpClient) {}

  downloadPolicy(): void {
    this.http.get('http://localhost:9999/api/policy/download', { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'PolicyDocument.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('❌ Failed to download policy:', err);
        alert('Failed to download the policy document.');
      }
    });
  }
}

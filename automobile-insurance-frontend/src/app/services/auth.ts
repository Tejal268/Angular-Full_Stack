import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private baseUrl = 'http://localhost:9999/api/auth'; // ✅ Spring Boot backend

  constructor(private http: HttpClient) { }

  // Login API - expects token as plain text
  login(email: string, password: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }, { responseType: 'text' });
  }

  // Register API for users only
  register(user: any): Observable<any> {
    return this.http.post('http://localhost:9999/api/users/register', user);
  }

  // Save JWT token to local storage
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Get token from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Save role to local storage
  saveUserRole(role: string): void {
    localStorage.setItem('role', role);
  }

  // Get role from local storage
  getUserRole(): string | null {
    return localStorage.getItem('role');
  }

  // Save userId to local storage
  saveUserId(userId: string): void {
    localStorage.setItem('userId', userId);
  }

  // Get userId from local storage
  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  // Check login status
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Clear session on logout
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
  }
}

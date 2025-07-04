import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  userForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  errorMessage: string = '';

  constructor(private auth: Auth, private router: Router) {}

  // ✅ Decode JWT without external libraries
  private decodeJwt(token: string): any {
    try {
      const payload = token.split('.')[1]; // JWT format: header.payload.signature
      const decodedPayload = atob(payload);
      return JSON.parse(decodedPayload);
    } catch (e) {
      console.error('Error decoding token', e);
      return null;
    }
  }

  login(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const { username, password } = this.userForm.value;

    this.auth.login(username, password).subscribe({
      next: (token: string) => {
        console.log('✅ Login Success:', token);
        this.auth.saveToken(token);

        const decodedToken = this.decodeJwt(token);
        const role = decodedToken?.role;
        console.log('User role:', role);

        this.auth.saveUserRole(role); // Save the role in storage/service

        // ✅ Navigate based on role
        if (role === 'USER') {
          this.router.navigate(['/user-dashboard']);
        } else if (role === 'OFFICER') {
          this.router.navigate(['/officer-dashboard']);
        } else {
          this.errorMessage = 'Unknown role!';
        }
      },
      error: (error) => {
        console.error('❌ Login Error:', error);
        this.errorMessage = 'Invalid email or password';
      }
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}

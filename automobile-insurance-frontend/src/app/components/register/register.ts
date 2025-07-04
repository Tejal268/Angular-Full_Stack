import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Navbar } from '../shared-layout/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  registerForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: ['', Validators.required],
      address: ['', Validators.required],
      aadhaarNumber: ['', Validators.required],
      panNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
    });
  }

  register(): void {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please fill all fields correctly';
      return;
    }

    const formData = this.registerForm.value;

    this.auth.register(formData).subscribe({
      next: () => {
        this.successMessage = 'Registration successful! Please login.';
        this.errorMessage = '';
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('❌ Registration error:', err);
        this.errorMessage = 'Registration failed. Please try again.';
        this.successMessage = '';
      }
    });
  }
}

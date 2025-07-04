import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.html',
  imports:[CommonModule,FormsModule],
  styleUrls: ['./payment.css']
})
export class PaymentComponent {

  proposalId: number = 0;
  quote: any = null;
  paymentMode: string = 'UPI';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private paymentService: PaymentService) {}

  getQuote(): void {
    this.successMessage = '';
    this.errorMessage = '';
    this.paymentService.getQuote(this.proposalId).subscribe({
      next: (data) => {
        this.quote = data;
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = 'Quote not found for this proposal.';
      }
    });
  }

  makePayment(): void {
    if (!this.proposalId) return;
    this.paymentService.completePayment(this.proposalId).subscribe({
      next: () => {
        this.successMessage = 'Payment completed successfully!';
        this.quote = null;
        this.proposalId = 0;
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = 'Payment failed.';
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  private baseUrl = 'http://localhost:9999/api';  // Adjust as per your backend

  constructor(private http: HttpClient) {}

 getQuote(proposalId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/quotes/proposal/${proposalId}`);
  }

  completePayment(proposalId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/payments/complete/${proposalId}`, null);
  }
  getAllPayments(): Observable<any> {
  return this.http.get(`${this.baseUrl}/all`);
}

}

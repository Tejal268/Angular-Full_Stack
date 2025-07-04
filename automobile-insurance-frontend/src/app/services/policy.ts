import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PolicyModel } from '../models/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:9999/api/policies';

//Get all polices
 //getPolicies(): Observable<any[]> {
 //  return this.http.get<any[]>(`${this.baseUrl}`);
 // }
getPolicies(): Observable<PolicyModel[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<PolicyModel[]>(`${this.baseUrl}`, { headers });
  }
  //downloadpolicypdf
   downloadPolicyPdf(policyId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/download-pdf/${policyId}`, { responseType: 'blob' });
  }
}

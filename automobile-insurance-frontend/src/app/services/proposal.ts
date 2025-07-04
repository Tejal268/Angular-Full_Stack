import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProposalModel } from '../models/proposal.model';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  private readonly baseUrl = 'http://localhost:9999/api/proposals';

  constructor(private http: HttpClient) {}

  /**
   * Create new proposal
   */
  createProposal(proposal: ProposalModel, userId: number): Observable<ProposalModel> {
    return this.http.post<ProposalModel>(`${this.baseUrl}/submit/${userId}`, proposal);
  }

  /**
   * Get proposals for logged-in user
   */
  getUserProposals(userId: number): Observable<ProposalModel[]> {
    return this.http.get<ProposalModel[]>(`${this.baseUrl}/user/${userId}`);
  }

  /**
   * Get all proposals (Officer access)
   */
  getAllProposals(): Observable<ProposalModel[]> {
    return this.http.get<ProposalModel[]>(`${this.baseUrl}/all`);
  }

   deleteProposal(proposalId: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/${proposalId}`, { responseType: 'text' });
  }
  
}

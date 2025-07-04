import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProposalModel } from '../../models/proposal.model';
import { ProposalService } from '../../services/proposal';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './proposal.html',
  styleUrls: ['./proposal.css'],
})
export class ProposalComponent implements OnInit {

  proposal: ProposalModel = new ProposalModel();
  successMessage: string = '';
  errorMessage: string = '';
  userProposals: ProposalModel[] = [];
  loading = false;

  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    this.getUserProposals();
  }

  onSubmit(): void {
    const userId = parseInt(localStorage.getItem('userId') || '0', 10);
    if (!userId) {
      this.errorMessage = 'User not logged in!';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.proposalService.createProposal(this.proposal, userId).subscribe({
      next: () => {
        this.successMessage = 'Proposal submitted successfully!';
        this.getUserProposals(); // Refresh table
        this.resetForm();
      },
      error: (error) => {
        console.error('Error submitting proposal:', error);
        this.errorMessage = 'Failed to submit proposal.';
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  getUserProposals(): void {
    const userId = parseInt(localStorage.getItem('userId') || '0', 10);
    this.proposalService.getUserProposals(userId).subscribe({
      next: (data) => {
        this.userProposals = data;
      },
      error: (error) => {
        console.error('Error fetching proposals:', error);
        this.userProposals = [];
      }
    });
  }

  deleteProposal(proposalId: number | undefined): void {
    if (!proposalId) {
      console.error('Proposal ID is undefined.');
      return;
    }

    this.proposalService.deleteProposal(proposalId).subscribe({
      next: () => {
        this.getUserProposals();  // ✅ Correct method call
      },
      error: (error) => {
        console.error('Error deleting proposal:', error);
      }
    });
  }

  resetForm(): void {
    this.proposal = new ProposalModel();
  }
}

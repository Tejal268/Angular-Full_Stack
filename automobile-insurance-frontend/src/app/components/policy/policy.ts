import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../services/policy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-policy',
  imports: [CommonModule],
  templateUrl: './policy.html',
  styleUrl: './policy.css'
})
export class Policy implements OnInit {
 

  policies: any[] = [];
  errorMessage = '';

  
  constructor(private policyService: PolicyService) {}
ngOnInit(): void {
  this.getPolicies();
}

getPolicies(): void {
  this.policyService.getPolicies().subscribe({
    next: (data) => {
      console.log('Policies received:', data);  // Check the console
      const userId = parseInt(localStorage.getItem('userId') || '0', 10);
      this.policies = data.filter(p => p.payment?.user?.id === userId);
    },
    error: (error) => {
      console.error('Error fetching policies:', error);
      this.policies = [];
    }
  });
}


    downloadPolicy(policyId: number): void {
    this.policyService.downloadPolicyPdf(policyId).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `policy_${policyId}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    }, error => {
      console.error('Error downloading policy:', error);
    });
  }
}

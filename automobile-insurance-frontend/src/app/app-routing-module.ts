import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { UserDashboard } from './components/user-dashboard/user-dashboard';
import { OfficerDashboard } from './components/officer-dashboard/officer-dashboard';
import { ProposalComponent } from './components/proposal/proposal';
import { Claim } from './components/claim/claim';
import { Customer } from './components/customer/customer';
import { Policy } from './components/policy/policy';
import { PaymentComponent } from './components/payment/payment';
import { Quote } from './components/quote/quote';

import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'officer-login', component: Login },         // Change to your OfficerLogin component later
  { path: 'officer-register', component: Register },   // Change to your OfficerRegister component later

  { path: 'user-dashboard', component: UserDashboard, canActivate: [AuthGuard] },
  { path: 'proposal', component: ProposalComponent, canActivate: [AuthGuard] },
  { path: 'claim', component: Claim, canActivate: [AuthGuard] },
  { path: 'customer', component: Customer, canActivate: [AuthGuard] },
  { path: 'policy', component: Policy, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'quote', component: Quote, canActivate: [AuthGuard] },

  { path: 'officer-dashboard', component: OfficerDashboard, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '', pathMatch: 'full' },
   { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

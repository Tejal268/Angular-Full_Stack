import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';

import { AppRoutingModule } from './app-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Standalone Components
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { OfficerDashboard } from './components/officer-dashboard/officer-dashboard';
import { UserDashboard } from './components/user-dashboard/user-dashboard';
import { Claim } from './components/claim/claim';
import { Customer } from './components/customer/customer';
import { Policy } from './components/policy/policy';
import { PaymentComponent } from './components/payment/payment';
import { ProposalComponent } from './components/proposal/proposal';
import { Quote } from './components/quote/quote';
import { Navbar } from './components/shared-layout/navbar/navbar';
import { Sidebar } from './components/shared-layout/sidebar/sidebar';

// Interceptor
import { AuthInterceptor } from './interceptors/auth-interceptor';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    App,

    // Standalone components (Angular 14+)
    Login,
    Register,
    OfficerDashboard,
    UserDashboard,
    Claim,
    Customer,
    Policy,
    PaymentComponent,
    ProposalComponent,
    Quote,
    Navbar,
    Sidebar
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }

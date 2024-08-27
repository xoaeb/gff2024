import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ModeComponent } from './mode/mode.component';
import { LinkUPIComponent } from './link-UPI/link-UPI.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { AmountEnterComponent } from './amount-enter/amount-enter.component';
import { UpiComponent } from './upi/upi.component';
import { RechargeSuccessComponent } from './recharge-success/recharge-success.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'modes', component: ModeComponent },
  { path: 'link-upi', component: LinkUPIComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'registration-success', component: RegistrationSuccessComponent },

  { path: 'amount-enter', component: AmountEnterComponent },
  { path: 'upi', component: UpiComponent },
  { path: 'success', component: RechargeSuccessComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ModeComponent } from './mode/mode.component';
import { LinkUPIComponent } from './link-UPI/link-UPI.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { AmountEnterComponent } from './amount-enter/amount-enter.component';
import { UpiComponent } from './upi/upi.component';
import { RechargeSuccessComponent } from './recharge-success/recharge-success.component';

@NgModule({
  declarations: [							
    AppComponent,
      LandingComponent,
      ModeComponent,
      LinkUPIComponent,
      RegistrationSuccessComponent,
      AmountEnterComponent,
      UpiComponent,
      RechargeSuccessComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

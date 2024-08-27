import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amount-enter',
  templateUrl: './amount-enter.component.html',
  styleUrls: ['./amount-enter.component.css'],
})
export class AmountEnterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.validateAmount()
  }
  nextPage() {
    this.router.navigate(['/upi']);
  }
  amount: any = '100'; // Default amount

  // Method to set the amount when a button is clicked
  setAmount(value: any) {
    this.amount = value;
    console.log(this.amount)
    this.validateAmount()
  }

  isButtonEnabled: boolean = false;

  validateAmount() {
        console.log(this.amount)

    this.isButtonEnabled = this.amount.trim().length > 0;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amount-enter',
  templateUrl: './amount-enter.component.html',
  styleUrls: ['./amount-enter.component.css']
})
export class AmountEnterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  nextPage(){
    this.router.navigate(['/upi']);

  }
  amount: number = 100;  // Default amount

  // Method to set the amount when a button is clicked
  setAmount(value: number) {
    this.amount = value;
  }

}

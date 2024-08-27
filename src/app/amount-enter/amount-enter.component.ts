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

}

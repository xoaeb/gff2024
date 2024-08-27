import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-UPI',
  templateUrl: './link-UPI.component.html',
  styleUrls: ['./link-UPI.component.css']
})
export class LinkUPIComponent implements OnInit {

  constructor(private router: Router) { }
  mobileNumber: string = '';
  showQR:boolean=false
  ngOnInit() {
  }

  showQRCode(){
    this.showQR=!this.showQR

    setTimeout(() => {
      this.nextPage()
    }, 5000);
  }
  nextPage(){
    this.router.navigate(['/registration-success']);

  }
  isButtonEnabled: boolean = false;

  validateInput(): void {
    // Check if the mobile number length is 10 digits
    this.isButtonEnabled = this.mobileNumber.length === 10;
  }

}

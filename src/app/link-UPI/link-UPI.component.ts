import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-UPI',
  templateUrl: './link-UPI.component.html',
  styleUrls: ['./link-UPI.component.css'],
})
export class LinkUPIComponent implements OnInit {
  constructor(private router: Router) {}
  mobileNumber: string = '';
  showQR: boolean = false;
  isLoading = true;
  progress = 0;

  ngOnInit() {}

  showQRCode() {
    this.showQR = !this.showQR;
    this.simulateLoading()

    // setTimeout(() => {
    //   this.isLoading = false;
    //   this.nextPage();

    // }, 5000);

    // setTimeout(() => {
    // }, 5000);
  }
  nextPage() {
    this.router.navigate(['/registration-success']);
  }
  isButtonEnabled: boolean = false;

  validateInput(): void {
    // Check if the mobile number length is 10 digits
    this.isButtonEnabled = this.mobileNumber.length === 10;
  }

  simulateLoading(): void {
    const interval = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 105) {
        this.progress = 100;
        this.isLoading = false;
        clearInterval(interval);
        this.nextPage(); 

      }
    }, 500); // Adjust this interval for your desired loading time
  }
}

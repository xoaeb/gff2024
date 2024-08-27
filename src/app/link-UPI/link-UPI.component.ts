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
  }
  nextPage(){
    this.router.navigate(['/registration-success']);

  }

}

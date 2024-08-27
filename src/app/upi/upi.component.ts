import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UpiComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  nextPage(){
    this.router.navigate(['/success']);

  }
}

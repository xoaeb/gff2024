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
  pinArray: boolean[] = Array(6).fill(false);
  pinIndex: number = 0;

  onNumClick(num: number): void {
    if (this.pinIndex < this.pinArray.length) {
      this.pinArray[this.pinIndex] = true;
      this.pinIndex++;
    }
  }

  onDeleteClick(): void {
    if (this.pinIndex > 0) {
      this.pinIndex--;
      this.pinArray[this.pinIndex] = false;
    }
  }
}

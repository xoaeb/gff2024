import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  nextPage(){
    this.router.navigate(['/link-upi']);

  }

}

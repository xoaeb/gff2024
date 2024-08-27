/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmountEnterComponent } from './amount-enter.component';

describe('AmountEnterComponent', () => {
  let component: AmountEnterComponent;
  let fixture: ComponentFixture<AmountEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

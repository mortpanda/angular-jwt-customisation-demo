import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {OktaWidget1Service } from 'app/shared/okta/okta-widget-1.service';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Widget1Component implements OnInit {

  constructor(
    public OktaWidget1Service:OktaWidget1Service,
  ) { }

  ngOnInit(){
    this.OktaWidget1Service.CloseWidget1();
    this.OktaWidget1Service.login1();
  }

}

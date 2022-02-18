import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaWidget1Service } from 'app/shared/okta/okta-widget-1.service';
import {OktaGetUserService} from 'app/shared/okta/okta-get-user.service';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StartpageComponent implements OnInit {
  widget1_tokens: boolean = false;
  widget1_idtoken;
  widget1_accesstoken;

  constructor(
    public OktaWidget1Service: OktaWidget1Service,
    public OktaGetUserService:OktaGetUserService,
  ) { }

  ngOnInit() {
    // this.widget1_tokens = false;
    this.widget1_accesstoken = localStorage.getItem('okta_siw_1_accesstoken');
    this.widget1_idtoken = localStorage.getItem('okta_siw_1_idtoken');

    switch (this.widget1_accesstoken) {
      case null: {
        this.widget1_tokens = false;

        break;
      }
      default: {
        // console.log(this.widget1_accesstoken)
        this.widget1_tokens = true;

        break;
      }
    }
    // console.log(this.widget1_tokens)


  }

}

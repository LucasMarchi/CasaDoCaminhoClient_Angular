import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //ajustar para ser private
  constructor(public oktaAuthService: OktaAuthService) {
  }

  ngOnInit() {
  }

}

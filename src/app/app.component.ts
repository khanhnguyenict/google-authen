import { Component, OnInit } from '@angular/core';
import * as googleAuthen from 'google-authen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  eventHandler = googleAuthen.eventHandler;
  googleSignInClient = '146277941132-51uhovmfh86i030igjolofcpav2jtkt6.apps.googleusercontent.com';
  ngOnInit() {
    googleAuthen.handleInitGoogleApi(this.googleSignInClient, 'gsuite-btn');
    this.eventHandler.on('authen-success', (authInfo) => {
      this.login(authInfo);
    });
  }
  login(data) {
    // debugger;
    console.log(data);
  }
}



# Google Authen V2

> This Lib implements Google APIs that use the  OAuth 2.0 protocol for authentication and authorization.

With using this Lib, you could implement Single Sign On feature by a best simple way.
## Supported versions
Angular 2+, React Class Component, Vue
Not tested for React Hooks

## Installation
Requires Node version >8.0 or above 

```bash
npm i google-authen-v2
```

## How to use

You can use it in your projects like so
Example for Angular 7

```javascript
import { Component, OnInit } from '@angular/core';
...
import * as googleAuthen from 'google-authen-v2';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SiginComponent implements OnInit {
     // 1. declare variable here
  eventHandler = googleAuthen.eventHandler;

  constructor(
   ...
 ) { }

  ngOnInit() {
      
     //2.  init function loading api and handle
    googleAuthen.handleInitGoogleApi(your_clientKey_registered_from_Google_Service, your_id_selector_button_login);

     // 3.  this function to listen  data from library
    this.eventHandler.on('authen-success', (authInfo) => {
      this.your_function_login(authInfo);
    });
  }
your_function_login(data) {
   // handle userAuthen here : id_token, access_token ...
   // send id_token to your backend's server
  }


}
```

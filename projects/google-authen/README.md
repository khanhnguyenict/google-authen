# Google Authen V2

> This Lib implements Google APIs that use the  OAuth 2.0 protocol for authentication and authorization.

With using this library, you could implement Single Sign On feature by a best simple way.
## Supported versions
Angular 2+, React Class Component, Vue.

## Installation
Requires Node version > 8.0 or above 

```bash
npm i google-authen-v2
```

## How to use
If you need to register an api-key from google, please check out [here.](https://developers.google.com/maps/documentation/javascript/get-api-key)

### 1. Example for Angular 8

  ```javascript
  import { Component, OnInit } from '@angular/core';
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
  ) { }

    ngOnInit() {
        
      //2. init function loading api and binding click's event to your signin button
      googleAuthen.handleInitGoogleApi(
          your_client_key_registered_from_google_service, 
          your_id_selector_button_login);

      // 3. this function to listen  data from library return
      this.eventHandler.on('authen-success', (authInfo) => {
        this.your_function_login(authInfo);
      });
    }

      your_function_login(userAuthen) {
        //4. handle userAuthen here : id_token, access_token ...
        // send id_token to your backend's server
        }

  }
  ```

### 2. Example for React 16 
  ``` javascript
  import React from 'react';
  import * as googleAuthen from 'google-authen-v2';

  class LoginApp extends React.Component {

    // 1. declare variable here
    eventHandler = googleAuthen.eventHandler;

    constructor() {
      super();
    }

    componentDidMount(){

      //2. init function loading api and binding click's event to your signin button
      googleAuthen.handleInitGoogleApi(
        your_client_key_registered_from_google_service, 
        your_id_selector_button_login);

      //3. this function to listen data from library return
      this.eventHandler.on('authen-success', (authInfo) => {
        this.your_function_login(authInfo);
      });
    }

     your_function_login(userAuthen) {
        //4. handle userAuthen here : id_token, access_token...,  
        //send id_token to your backend's server
      }

    render() {
      return(
        /**form login here */
        <button id ='your_id_selector_button_login'>Login With Gmail</button>
      )
    }
  }
  ```

### 3. Example for Vue 2.6
  ```javascript
  <template>
  <div id="app">
    <button id='your_id_selector_button_login'>Login With Gmail </button>
  </div>
</template>
 // your <script>
  import * as googleAuthen from 'google-authen-v2';
  export default {

  data() {
    return {
    // 1. declare variable here
      eventHandler : googleAuthen.eventHandler
    }
  },
  name: 'app',
  mounted() {
    //2. init function loading api and binding click's event to your signin button
      googleAuthen.handleInitGoogleApi(
        your_client_key_registered_from_google_service, 
        your_id_selector_button_login);

      //3. this function to listen data from library return
      this.eventHandler.on('authen-success', (authInfo) => {
        this.your_function_login(authInfo);
      });
  },
  methods:{
   your_function_login(userAuthen) {
    //4. handle userAuthen here : id_token, access_token...,  
    //send id_token to your backend's server
    }
  }
}
  //</script>
  ```
## Author
khanhnguyen.ict@gmail.com

## GitHub link source code to demo
[https://github.com/khanhnguyenict/google-authen]()

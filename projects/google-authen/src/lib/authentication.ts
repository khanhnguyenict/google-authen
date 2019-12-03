import { config } from './constant';
import { loadScript } from './api';
import * as EventEmitter from 'events';

const eventEmitter = new EventEmitter.EventEmitter();
declare const gapi: any;
let googleUser: any;

/**
 * The Sign-In  client object.
 */
let auth2: any;

/**
 *  Initializes the Sign-In client after the script loaded.
 */
function handleInitGoogleApi(sourceScript, clientKey, idButtonSelector) {
    loadScript(sourceScript).then(() => initSigninV2(clientKey, idButtonSelector));
}

/**
 * Initializes the Sign-In client.
 */

function initSigninV2(clientKey, idButtonSelector) {
    config.client_id = clientKey;
    gapi.load('auth2', () => {
        auth2 = gapi.auth2.init(config);

        // Listen for sign-in state changes.
        auth2.isSignedIn.listen(signinChanged);

        // Listen for changes to current user.
        auth2.currentUser.listen(userChanged);

        // Sign in the user if they are currently signed in.
        if (auth2.isSignedIn.get()) {
            auth2.signIn();
        }

        refreshValues();

        attachSignin(document.getElementById(idButtonSelector));
    });

}

/**
 * Attach the click handler to the sign-in button
 */
function attachSignin(element) {
    auth2.attachClickHandler(element, {}, onSuccess, onFailure);
}

/**
 * Handle successful sign-ins.
 */
function onSuccess(user) {
    const authInfo = user.getAuthResponse();
    eventEmitter.emit('sign-in-success', authInfo);
}

/**
 * Handle sign-in failures.
 */
function onFailure(error) {
}

/**
 * Listener method for when the user changes.
 */
function userChanged(user) {
    console.log('User now: ', user);
    googleUser = user;
    updateGoogleUser();
}

/**
 * Listener method for sign-out live value.
 */
function signinChanged(status) {
    // console.log('Signin state changed to ', status);
}

/**
 * Updates the properties in the Google User table using the current user.
 */
function updateGoogleUser() {
    if (googleUser) {
        // console.log('googleUser.getAuthResponse()', googleUser.getAuthResponse());
    }
}

/**
 * Retrieves the current user and signed in states from the GoogleAuth
 * object.
 */
function refreshValues() {
    if (auth2) {
        googleUser = auth2.currentUser.get();
        updateGoogleUser();
    }
}

export { handleInitGoogleApi, eventEmitter };

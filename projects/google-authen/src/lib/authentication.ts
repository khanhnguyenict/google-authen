import { config } from './constant';
import { loadScript } from './api';
import * as EventEmitter from 'events';

/** handle emit data when sign success */
const eventHandler = new EventEmitter.EventEmitter();

declare const gapi: any;

let googleUser: any;

/**
 * The Sign-In  client object.
 */
let auth2: any;

/**
 *  Initializes the Sign-In client after the script loaded.
 */
function handleInitGoogleApi(clientKey, selectorIdButton) {
    loadScript()
        .then(() => initSigninV2(clientKey, selectorIdButton))
        .catch(error => console.log(error));
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
    eventHandler.emit('authen-success', authInfo);
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
    googleUser = user;
    updateGoogleUser();
}

/**
 * Listener method for sign-out live value.
 */
function signinChanged(status) {
    eventHandler.emit('sigin-status', status);
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

export { handleInitGoogleApi, eventHandler };

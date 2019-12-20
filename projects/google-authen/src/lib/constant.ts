const Constant = {
    COOKIE_POLICY: 'single_host_origin',
    SCOPE_GSUITE: 'profile',
    LOAD_STATUS: 'Already Loaded',
    LOADED: 'Loaded',
    SCRIPT_TYPE: 'text/javascript',
    TAG_NAME_HEAD: 'head',
    TAG_NAME_SCRIPT: 'script'
};

const config = {
    client_id: '',
    cookiepolicy: Constant.COOKIE_POLICY,
    scope: Constant.SCOPE_GSUITE,
    // ux_mode: 'redirect',
};

const scriptObject = {
    name: 'google-authen',
    loaded: false,
    src: 'https://apis.google.com/js/platform.js?onload=init'
};

function isLoadedScript() {
    return scriptObject.loaded;
}

export { Constant, scriptObject, config, isLoadedScript };

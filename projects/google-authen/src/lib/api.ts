import { Constant, scriptObject, isLoadedScript } from './constant';

function loadScript() {
    const isloadedScript = isLoadedScript();
    return new Promise((resolve, reject) => {
        if (isloadedScript) {
            resolve({ script: scriptObject.name, loaded: true, status: Constant.LOAD_STATUS });
        } else {
            const script = document.createElement('script');
            script.type = Constant.SCRIPT_TYPE;
            script.src = scriptObject.src;
            script.onload = () => {
                scriptObject.loaded = true;
                resolve({ script: scriptObject.name, loaded: true, status: Constant.LOAD_STATUS });
            };
            script.onerror = (error: any) => reject({ script: scriptObject.name, loaded: false, status: Constant.LOAD_STATUS, error: error });
            document.getElementsByTagName('body')[0].appendChild(script);
        }
    });
}

export { loadScript };

import { Constant, scriptObject, isLoadedScript } from './constant';
import { IScript } from './model';

function loadScript(source: IScript) {
    const isloadedScript = isLoadedScript();
    return new Promise((resolve, reject) => {
        if (isloadedScript) {
            resolve({ script: source.name, loaded: true, status: Constant.LOAD_STATUS });
        } else {
            const script = document.createElement('script');
            script.type = Constant.SCRIPT_TYPE;
            script.src = source.src;
            script.onload = () => {
                scriptObject.loaded = true;
                resolve({ script: source.name, loaded: true, status: Constant.LOAD_STATUS });
            };
            script.onerror = (error: any) => resolve({ script: source.name, loaded: false, status: Constant.LOAD_STATUS });
            document.getElementsByTagName('head')[0].appendChild(script);
        }
    });
}

export { loadScript };
import state  from '@/store/state';
import en from '@/locales/en.json';
import tr from '@/locales/tr.json';

const locales = {
    'en_US': en,
    'tr_TR': tr
};

export const localize = function (key, variables = null) {
    if (!key) {
        return '';
    }
    
    const locale = state.language;
    let result = locales[locale][key];

    if (variables === null) {
        return result || `[Localize error]: key ${key} not found`;
    }

    if (result !== undefined) {
        Object.keys(variables).forEach(element => {
            result = result.replace(element, variables[element])
        });
        
        return result;
    }

    return `[Localize error]: key ${key} not found`;
}

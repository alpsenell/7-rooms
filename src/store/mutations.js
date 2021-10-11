import { Mutation } from './types';

export default {
    /**
     * @param {object} state
     * @param {string} selectedLanguage
     */
    [Mutation.CHANGE_LANGUAGE] (state, selectedLanguage) {
        state.language = selectedLanguage;
    }
};

import spanish from './es.json';
import english from './en.json';
import italian from './it.json';

const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en',
    ITALIAN: 'it'
};

export const getI18N = (currentLocale: string ) => {
    if (currentLocale === LANGUAGES.SPANISH) return spanish;
    if (currentLocale === LANGUAGES.ENGLISH) return english;
    if (currentLocale === LANGUAGES.ITALIAN) return italian;
    return spanish;
}
import en from './en.json';
import es from './es.json';

type Lang = 'en' | 'es';

const translations = { en, es };

export const t = (key: string, lang: Lang = 'es') => {
  return translations[lang][key] || key;
};

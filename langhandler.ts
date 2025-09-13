import pt from './public/locales/pt/common.json';
import en from './public/locales/en/common.json';
import es from './public/locales/es/common.json';

const locales: Record<string, Record<string, string>> = { pt, en, es };

// Returns the language from localStorage (client) or a default/server-provided value
export function getCurrentLanguage(defaultLang: string = 'pt'): string {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      const storedLang = localStorage.getItem('language');
      if (storedLang === 'pt' || storedLang === 'en' || storedLang === 'es') {
        return storedLang;
      }
    } catch (e) {
      console.error('Could not access localStorage for language:', e);
    }
  }
  return defaultLang;
}

// Server-compatible: pass the language explicitly
import { sysStore } from './src/stores/sys';
export function getLabel(key: string, lang?: string): string {
  let language = lang;
  if (!language) {
    // Try to get from store (reactive)
    try {
      language = sysStore.getState().language;
    } catch {}
    if (!language) {
      language = getCurrentLanguage();
    }
  }
  return locales[language]?.[key] ?? key;
}

// Only for client-side language switching
export function switchLanguage(lang: string) {
  if ((lang === 'pt' || lang === 'en' || lang === 'es')) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('language', lang);
      } catch (e) {
        // Could not set language
      }
    }
  }
}
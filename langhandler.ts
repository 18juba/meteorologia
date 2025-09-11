
import pt from './public/locales/pt/common.json';
import en from './public/locales/en/common.json';
import es from './public/locales/es/common.json';
import { sysStore } from './src/stores/sys';

export function getLabel(key: string): string {
  const locales: Record<string, Record<string, string>> = { pt, en, es };
    if (typeof window === "undefined") {
    // SSR -> devolve um valor padrão
    return locales['pt']?.[key]; 
  }

  const { language } = sysStore.getState();
  const locale = language || 'pt';

    return locales[locale]?.[key] ?? key;
    
}
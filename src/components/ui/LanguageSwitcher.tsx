
"use client";

import React, { useEffect, useState } from 'react';
import { sysStore, setLanguage, subscribeLanguageChange } from '@/stores/sys';
import { switchLanguage } from '../../../langhandler';

const languages = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];


export const LanguageSwitcher = () => {
  const { language } = sysStore();
  const [unused, setRerender] = useState(0);

  // Hydrate language from localStorage on mount
  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang && (lang === 'pt' || lang === 'en' || lang === 'es')) {
      setLanguage(lang);
    } else {
      setLanguage('pt');
      localStorage.setItem('language', 'pt');
    }
  }, []);

  // Subscribe to language changes to force rerender
  useEffect(() => {
    const unsub = subscribeLanguageChange(() => setRerender(r => r + 1));
    return unsub;
  }, []);

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    localStorage.setItem('language', lng);
    switchLanguage(lng);
  };

  return (
    <div style={{ marginBottom: 16 }}>
      {languages.map(lang => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          style={{
            marginRight: 8,
            fontWeight: lang.code === language ? 'bold' : 'normal',
            textDecoration: lang.code === language ? 'underline' : 'none',
            opacity: lang.code === language ? 1 : 0.7
          }}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

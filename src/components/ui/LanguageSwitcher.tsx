
"use client";
import { useRouter } from 'next/router';
import { i18n } from 'next-i18next';
import { sysStore, setLanguage } from '@/stores/sys';
import { useTranslation } from 'next-i18next';

const languages = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];


export const LanguageSwitcher = () => {
  const router = useRouter();
  const { language } = sysStore();
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
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

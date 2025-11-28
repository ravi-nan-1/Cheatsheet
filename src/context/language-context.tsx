"use client";

import React, { createContext, useState, useCallback, useMemo } from 'react';
import i18next from 'i18next';
import { translations, Language } from '@/lib/translations';

// Initialize i18next
i18next.init({
  resources: translations,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, options?: any) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = useCallback((lang: Language) => {
    i18next.changeLanguage(lang);
    setLanguageState(lang);
  }, []);

  const t = useCallback((key: string, options?: any) => {
    return i18next.t(key, options);
  }, []);
  
  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

    
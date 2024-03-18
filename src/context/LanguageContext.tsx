import React, { createContext, useContext, useEffect, useState } from 'react';
import { ReactChildren } from './types';
import { IAppLanguage, appLanguage } from '@/constants/app-language';
import { LANGUAGE } from '@/constants';
import i18n from 'i18n';
import { getLocales } from 'react-native-localize';
import { getStorageItem, setStorageItem } from '@/utils/storage-info.helper';

type LanguageContextValues = {
  language: IAppLanguage;
  changeLanguage: (newLanguage: IAppLanguage) => void;
};

const LanguageContext = createContext<LanguageContextValues>({
  language: appLanguage[0],
  changeLanguage: () => {},
});

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }: ReactChildren) => {
  const [language, setLanguage] = useState<IAppLanguage>(appLanguage[0]);

  useEffect(() => {
    (async () => {
      // Check value of languageDefault inside storage or not
      const languageDefault = await getStorageItem(LANGUAGE);
      if (languageDefault) {
        i18n.changeLanguage(JSON.parse(languageDefault).key);
        setLanguage(JSON.parse(languageDefault));
      } else {
        // If don't have any language from storage, check language from system device
        const languageDevice = appLanguage.find(
          item => item.key === getLocales()[0].languageCode,
        );
        if (languageDevice) {
          setStorageItem(LANGUAGE, JSON.stringify(languageDevice));
          i18n.changeLanguage(languageDevice.key);
          setLanguage(languageDevice);
        } else {
          setStorageItem(LANGUAGE, JSON.stringify(appLanguage[0])); // english language
          i18n.changeLanguage(appLanguage[0].key);
          setLanguage(appLanguage[0]);
        }
      }
    })();
  }, []);

  const changeLanguage = (newLanguage: IAppLanguage) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage.key);
    setStorageItem(LANGUAGE, JSON.stringify(newLanguage));
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

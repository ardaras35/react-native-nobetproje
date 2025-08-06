// hooks/useTranslation.js
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translations } from '../../translations/translations'; // ✅ .js dosyasından import

export const useTranslation = () => {
  const [language, setLanguage] = useState('tr');

  useEffect(() => {
    loadSavedLanguage();
  }, []);

  const loadSavedLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('app_language');
      if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
        setLanguage(savedLanguage);
        console.log('Kaydedilen dil yüklendi:', savedLanguage);
      }
    } catch (error) {
      console.log('Dil yükleme hatası:', error);
    }
  };

  const changeLanguage = async (newLanguage) => {
    try {
      setLanguage(newLanguage);
      await AsyncStorage.setItem('app_language', newLanguage);
      console.log('Dil değiştirildi:', newLanguage);
    } catch (error) {
      console.log('Dil kaydetme hatası:', error);
    }
  };

  const t = (key) => {
    const translation = translations[language]?.[key];
    
    if (translation) {
      return translation;
    }
    
    // Fallback to Turkish
    const fallback = translations['tr']?.[key];
    if (fallback) {
      console.warn(`Çeviri eksik (${language}): ${key}, Türkçe kullanıldı`);
      return fallback;
    }
    
    // Son çare: key'i döndür
    console.warn(`Çeviri bulunamadı: ${key}`);
    return key;
  };

  return {
    t,
    changeLanguage,
    language,
    availableLanguages: ['tr', 'en']
  };
};
// Components/LanguageSelector.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTranslation } from '../../hooks/useTranslation'; // Çeviri hook'unu kullan

const LanguageSelector = () => {
  const { changeLanguage, language } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.button, language === 'tr' && styles.active]}
        onPress={() => changeLanguage('tr')}
      >
        <Text style={[styles.text, language === 'tr' && styles.activeText]}>🇹🇷</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, language === 'en' && styles.active]}
        onPress={() => changeLanguage('en')}
      >
        <Text style={[styles.text, language === 'en' && styles.activeText]}>🇺🇸</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  active: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  text: {
    fontSize: 16,
  },
  activeText: {
    color: 'white',
  },
});

export default LanguageSelector;
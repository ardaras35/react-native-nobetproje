// Veli girişi ekranı: geri butonu ve başlık, bilgi ve logo bölümü, ad-soyad ve numara ile giriş formu bulunmakta. 
// ParentsLoginScreen için.

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import parents from '../data/parent.json';
import styles from '../styles/ParentsLoginScreenStyle';

import LoginHeader from '../Components/ParentsLoginScreen/LoginHeader';
import LoginIntro from '../Components/ParentsLoginScreen/LoginIntro';
import ParentsLoginForm from '../Components/ParentsLoginScreen/ParentsLoginForm';

export default function ParentsLoginScreen() {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState('');
  const [numara, setNumara] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    const tokens = fullName.trim().split(/\s+/);
    if (tokens.length < 2 || !numara.trim()) {
      return Alert.alert(t('eksik_bilgi'), t('lutfen_girdiginiz_bilgileri_ko'));
    }

    const lastName = tokens.pop().toLowerCase();
    const firstName = tokens.join(' ').toLowerCase();
    const pass = numara.trim();

    const user = parents.find(
      a =>
        a.isim.toLocaleLowerCase('tr-TR') === firstName &&
        a.soyisim.toLocaleLowerCase('tr-TR') === lastName &&
        a.password === pass
    );

    if (user) {
      navigation.replace('ParentsHome', { user });
    } else {
      Alert.alert(t('hatali_giris'), t('girdiginiz_bilgide_kayit_bulun'));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoginHeader navigation={navigation} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <LoginIntro />
          <ParentsLoginForm
            fullName={fullName}
            numara={numara}
            setFullName={setFullName}
            setNumara={setNumara}
            onLogin={handleLogin}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
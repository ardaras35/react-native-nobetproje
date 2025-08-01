// Veli girişi ekranı: geri butonu ve başlık, bilgi ve logo bölümü, ad-soyad ve numara ile giriş formu bulunmakta. 
// ParentsLoginScreen için.

import React, { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import parents from '../data/parent.json';
import styles from '../styles/ParentsLoginScreenStyle';

import LoginHeader from '../Components/ParentsLoginScreen/LoginHeader';
import LoginIntro from '../Components/ParentsLoginScreen/LoginIntro';
import ParentsLoginForm from '../Components/ParentsLoginScreen/ParentsLoginForm';

export default function ParentsLoginScreen() {
  const [fullName, setFullName] = useState('');
  const [numara, setNumara] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    const tokens = fullName.trim().split(/\s+/);
    if (tokens.length < 2 || !numara.trim()) {
      return Alert.alert('Eksik Bilgi', 'Lütfen girdiğiniz bilgileri kontrol edin.');
    }

    const lastName = tokens.pop().toLowerCase();
    const firstName = tokens.join(' ').toLowerCase();
    const pass = numara.trim();

    const user = parents.find(
      a =>
        a.isim.toLowerCase() === firstName &&
        a.soyisim.toLowerCase() === lastName &&
        a.password === pass
    );

    if (user) {
      navigation.replace('ParentsHome', { user });
    } else {
      Alert.alert('Hatalı Giriş', 'Girdiğiniz bilgide kayıt bulunamamıştır.');
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

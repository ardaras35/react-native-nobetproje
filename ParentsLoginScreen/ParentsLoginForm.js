// Veli girişi ekranı: geri butonu ve başlık, bilgi ve logo bölümü, ad-soyad ve numara ile giriş formu bulunmakta. 
// ParentsLoginScreen için.

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import parents from '../data/parent.json';

import LoginHeader from '../components/LoginHeader';
import LoginIntro from '../components/LoginIntro';
import ParentLoginForm from '../components/ParentLoginForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});


export default function ParentsLogin() {
  const [fullName, setFullName] = useState('');
  const [numara, setNumara] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    const tokens = fullName.trim().split(/\s+/);
    if (tokens.length < 2 || !numara.trim()) {
      return alert('Eksik Bilgi', 'Lütfen girdiğiniz bilgileri kontrol edin.');
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
      alert('Hatalı Giriş', 'Girdiğiniz bilgide kayıt bulunamamıştır.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoginHeader navigation={navigation} />

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <LoginIntro />
          <ParentLoginForm
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


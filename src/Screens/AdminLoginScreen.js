// Yönetici Giriş Ekranı: geri tuşu ve başlık,  logo, hoş geldiniz metni, ad soyad ve şifre formu bulunmaktadır.

import React, { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import admin from '../data/admin.json';
import styles from '../styles/AdminLoginScreenStyle';


// Kullanılan component dosyaları çekiliyor.
import AdminLoginHeader from '../components/AdminLogin/AdminLoginHeader';
import AdminLoginIntro from '../components/AdminLogin/AdminLoginIntro';
import AdminLoginForm from '../components/AdminLogin/AdminLoginForm';

export default function AdminLoginScreen() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  /** Giriş işlemini kontrol eder: Ad soyad input'unu parçalar, JSON'daki kullanıcıyla eşleştirir.
      Başarılıysa yönlendirir **/

  const handlePress = () => {
    const tokens = fullName.trim().split(/\s+/);
    if (tokens.length < 2 || !password.trim()) {
      return alert('Eksik Bilgi', 'Lütfen girdiğiniz bilgileri kontrol edin.');
    }

    const lastName = tokens.pop().toLowerCase();
    const firstName = tokens.join(' ').toLowerCase();
    const pass = password.trim();

    const user = admin.find(
      a =>
        a.isim.toLowerCase() === firstName &&
        a.soyisim.toLowerCase() === lastName &&
        a.password === pass
    );

    if (user) {
      navigation.replace('AdminHome', { user });
    } else {
      alert('Hatalı Giriş', 'Girdiğiniz bilgide kayıt bulunamadı.');
      setPassword('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AdminLoginHeader navigation={navigation} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.inner}
          keyboardShouldPersistTaps="handled"
        >
          <AdminLoginIntro fullName={fullName} />

          <AdminLoginForm
            fullName={fullName}
            setFullName={setFullName}
            password={password}
            setPassword={setPassword}
            onLogin={handlePress}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


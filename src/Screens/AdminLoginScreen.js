// Yönetici Giriş Ekranı: geri tuşu ve başlık,  logo, hoş geldiniz metni, ad soyad ve şifre formu bulunmaktadır.

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import admin from '../data/admin.json';
import styles from '../styles/AdminLoginScreenStyle';


// Kullanılan component dosyaları çekiliyor.
import AdminLoginHeader from '../Components/AdminLoginScreen/AdminLoginHeader';
import AdminLoginIntro from '../Components/AdminLoginScreen/AdminLoginIntro';
import AdminLoginForm from '../Components/AdminLoginScreen/AdminLoginForm';

export default function AdminLoginScreen() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  /** Giriş işlemini kontrol eder: Ad soyad input'unu parçalar, JSON'daki kullanıcıyla eşleştirir.
      Başarılıysa yönlendirir **/

  const handlePress = () => {
  const { t } = useTranslation();
    const tokens = fullName.trim().split(/\s+/);
    if (tokens.length < 2 || !password.trim()) {
      return alert('Eksik Bilgi: ' + t('lutfen_girdiginiz_bilgileri_ko'));
    }

    const lastName = tokens.pop().toLocaleLowerCase('tr-TR');
    const firstName = tokens.join(' ').toLocaleLowerCase('tr-TR');
    const pass = password.trim();

    const user = admin.find(
      a =>
        a.isim.toLocaleLowerCase('tr-TR') === firstName &&
        a.soyisim.toLocaleLowerCase('tr-TR') === lastName &&
        a.password === pass
    );

    if (user) {
      navigation.replace('AdminHome', { user });
    } else {
      alert(t('hatali_giris') + '\n' + t('girdiginiz_bilgide_kayit_bulun'));
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


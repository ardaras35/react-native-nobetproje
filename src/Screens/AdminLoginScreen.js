import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import admin from '../data/admin.json';
import styles from '../styles/AdminLoginScreenStyle';

import AdminLoginHeader from '../Components/AdminLoginScreen/AdminLoginHeader';
import AdminLoginIntro from '../Components/AdminLoginScreen/AdminLoginIntro';
import AdminLoginForm from '../Components/AdminLoginScreen/AdminLoginForm';

export default function AdminLoginScreen() {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handlePress = () => {
    const tokens = fullName.trim().split(/\s+/);
    if (tokens.length < 2 || !password.trim()) {
      return Alert.alert(t('eksik_bilgi'), t('lutfen_girdiginiz_bilgileri_ko'));
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
      Alert.alert(t('hatali_giris'), t('girdiginiz_bilgide_kayit_bulun'));
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
// Yönetici giriş formu: ad-soyad input, şifre input, giriş butonu bulunmaktadır.

import { View, Text, TextInput, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/AdminLoginFormStyle';

const AdminLoginForm = ({ fullName, setFullName, password, setPassword, onLogin }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ad Soyad</Text>
      <TextInput
        placeholder="Doruk Aras"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />

      <Text style={styles.label}>{t('sifre')}</Text>
      <TextInput
        placeholder="123456"
        secureTextEntry
        keyboardType="number-pad"
        value={password}
        onChangeText={setPassword}
        maxLength={6}
        style={[styles.input, styles.lastInput]}
      />

      <Pressable onPress={onLogin} style={styles.button}>
        <Text style={styles.buttonText}>{t('giris_yap')}</Text>
      </Pressable>
    </View>
  );
};

export default AdminLoginForm;

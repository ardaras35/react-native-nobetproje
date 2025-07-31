import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  InputAccessoryView,
  TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import admin from '../data/admin.json';

export default function AdminLogin() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handlePress = () => {
    const tokens = fullName.trim().split(/\s+/);
    if (tokens.length < 2 || !password.trim()) {
      Alert.alert('Eksik Bilgi', 'Lütfen girdiğiniz bilgileri kontrol edin.');
      return;
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
      Alert.alert('Hatalı Giriş', 'Girdiğiniz bilgide kayıt bulunamadı.');
      setPassword('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
              <Pressable 
                onPress={() => navigation.goBack()} 
                style={styles.backButton}
              >
                <Text style={styles.backButtonText}>←</Text>
              </Pressable>
              <Text style={styles.headerTitle}>Geri Dön</Text>
              <View style={styles.headerSpacer} />
            </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

          <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
            <Image
              source={require('../../assets/okulon.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.welcomeText}>
              Hoşgeldiniz Sn. {fullName || ''}
            </Text>

            <Text style={styles.label}>Ad Soyad</Text>
            <TextInput
              placeholder="Doruk Aras"
              value={fullName}
              onChangeText={setFullName}
              style={styles.input}
            />

            <Text style={styles.label}>Şifre</Text>
            <TextInput
              placeholder="123456"
              secureTextEntry
              keyboardType="number-pad"
              value={password}
              onChangeText={setPassword}
              maxLength={6}
              style={[styles.input, styles.lastInput]}
            />

            <Pressable
            onPress={handlePress}
        style={[styles.button, ({ pressed }) => [ pressed && styles.buttonPressed ]]} >
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </Pressable>
          </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  inner: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },

  logo: {
    width: 140,
    height: 140,
    marginBottom: 110
  },

  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24
  },

  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    marginBottom: 4
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16
  },

  lastInput: {
    marginBottom: 24
  },

  button: {
    width: '80%',
    paddingVertical: 14,
    backgroundColor: '#000000',
    borderRadius: 8,
    alignItems: 'center'
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButtonText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'normal',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
    textAlign: 'left',
  },

  headerSpacer: {
    width: 40,
    height: 40,
  },
});

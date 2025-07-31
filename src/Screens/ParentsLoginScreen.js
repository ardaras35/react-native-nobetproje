import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import parents from '../data/parent.json';

export default function ParentsLogin() {
  const [fullName, setFullName] = useState('');
  const [numara, setNumara] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    const tokens = fullName.trim().split(/\s+/);
    if (tokens.length < 2 || !numara.trim()) {
      Alert.alert('Eksik Bilgi', 'Lütfen girdiğiniz bilgileri kontrol edin.');
      return;
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
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

          <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
            <Image
              source={require('../../assets/okulon.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.infoText}>
              Nöbetçi öğretmenlerin bilgilerini görmek için lütfen giriş yapınız.
            </Text>

            <Text style={styles.inputLabel}>Öğrencinizin Adı ve Soyadı</Text>
            <TextInput
              placeholder="Arda Aras"
              value={fullName}
              onChangeText={setFullName}
              style={styles.input}
            />

            <Text style={styles.inputLabel}>Öğrencinin Numarası</Text>
            <TextInput
              placeholder="1234"
              keyboardType="number-pad"
              value={numara}
              onChangeText={setNumara}
              maxLength={4}
              style={[styles.input, styles.lastInput]}
            />

            <Pressable
            onPress={handleLogin}
            style={[styles.button, ({ pressed }) => [ pressed && styles.buttonPressed ]]} >
            <Text style={styles.buttonText}>Giriş Yap</Text>
            </Pressable>

          </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
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

  inner: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },

  logo: {
    width: 140,
    height: 140,
    marginBottom: 105
  },

  infoText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 16
  },

  inputLabel: {
    alignSelf: 'flex-start',
    color: '#000000',
    marginBottom: 4,
    fontSize: 14
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
});
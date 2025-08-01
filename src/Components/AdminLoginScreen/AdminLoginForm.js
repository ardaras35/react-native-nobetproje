// Yönetici giriş formu: ad-soyad input, şifre input, giriş butonu bulunmaktadır.

import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    marginBottom: 4,
    color: '#000',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  lastInput: {
    marginBottom: 24,
  },
  button: {
    width: '80%',
    paddingVertical: 14,
    backgroundColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});


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

      <Pressable onPress={onLogin} style={styles.button}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </Pressable>
    </View>
  );
};

export default AdminLoginForm;

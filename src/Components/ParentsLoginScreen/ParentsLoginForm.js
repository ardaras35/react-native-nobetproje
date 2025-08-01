import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/ParentsLoginFormStyle';

export default function ParentsLoginForm({ fullName, setFullName, numara, setNumara, onLogin }) {
  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Ad Soyad"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Öğrenci Numarası"
        value={numara}
        onChangeText={setNumara}
        style={styles.input}
        keyboardType="numeric"
        placeholderTextColor="#999"
      />
      <TouchableOpacity onPress={onLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

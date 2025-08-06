import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/ParentsLoginFormStyle';

export default function ParentsLoginForm({ fullName, setFullName, numara, setNumara, onLogin }) {
  const { t } = useTranslation();

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>{t('ogrencinin_adi_soyadi')}</Text>
      <TextInput
        placeholder={t('arda_aras_placeholder')}
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
        placeholderTextColor="#999999"
      />
      <Text style={styles.label}>{t('ogrenci_numarasi')}</Text>
      <TextInput
        placeholder={t('1234_placeholder')}
        value={numara}
        onChangeText={setNumara}
        style={styles.input}
        keyboardType="numeric"
        maxLength={4}
        placeholderTextColor="#999"
      />
      <TouchableOpacity onPress={onLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>{t('giris_yap')}</Text>
      </TouchableOpacity>
    </View>
  );
}
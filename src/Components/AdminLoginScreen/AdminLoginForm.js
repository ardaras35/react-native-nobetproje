import { View, Text, TextInput, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/AdminLoginFormStyle';

const AdminLoginForm = ({ fullName, setFullName, password, setPassword, onLogin }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('ad_soyad')}</Text>
      <TextInput
        placeholder={t('doruk_aras_placeholder')}
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />

      <Text style={styles.label}>{t('sifre')}</Text>
      <TextInput
        placeholder={t('123456_placeholder')}
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
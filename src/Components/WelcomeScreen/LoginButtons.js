import { Pressable, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next'; // ✅ Ekle
import styles from './Styles/LoginButtonStyle';

const LoginButtons = ({ onNavigate }) => {
  const { t } = useTranslation(); // ✅ Ekle

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={() => onNavigate('ParentsLogin')} style={styles.button}>
        <Text style={styles.buttonText}>{t('veli_girisi')}</Text> {/* ✅ Değiştir */}
      </Pressable>

      <Pressable onPress={() => onNavigate('AdminLogin')} style={[styles.button, styles.buttonSpacing]}>
        <Text style={styles.buttonText}>{t('yonetici_girisi')}</Text> {/* ✅ Değiştir */}
      </Pressable>

      <Pressable onPress={() => onNavigate('Teachers')} style={[styles.button, styles.buttonSpacing]}>
        <Text style={styles.buttonText}>{t('ogretmenlerimiz')}</Text> {/* ✅ Değiştir */}
      </Pressable>
    </View>
  );
};

export default LoginButtons;
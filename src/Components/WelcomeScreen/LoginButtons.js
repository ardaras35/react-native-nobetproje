//  Ana giriş butonlarını içerir: Veli Girişi, Yönetici Girişi, Öğretmenlerimiz.  Welcome Screen için.

import { Pressable, Text, View } from 'react-native';
import styles from './Styles/LoginButtonStyle';
import { useTranslation } from '../../hooks/useTranslation'; // ✅ Ekle (path'i proje yapına göre ayarla)

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
// Yönetici giriş ekranı giriş bölümü: logo (okulon.png/okuloff.png), hoşgeldiniz metni bulunmaktadır.

import { View, Image, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/AdminLoginIntroStyle';

const AdminLoginIntro = ({ fullName }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/okulon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>
        {t('hosgeldiniz')} {fullName || ''}
      </Text>
    </View>
  );
};

export default AdminLoginIntro;
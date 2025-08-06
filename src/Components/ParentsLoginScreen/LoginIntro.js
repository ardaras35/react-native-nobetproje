// Veli girişi ekranı giriş bölümü: Logo (okulon.png/okuloff.png), açıklama metni bulunmaktadır. ParentsLoginScreen için.

import { View, Image, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/LoginIntroStyle'

const LoginIntro = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/okulon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.infoText}>
        Nöbetçi öğretmenlerin bilgilerini görmek için lütfen giriş yapınız.
      </Text>
    </View>
  );
};

export default LoginIntro;

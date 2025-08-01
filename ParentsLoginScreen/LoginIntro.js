// Veli girişi ekranı giriş bölümü: Logo (okulon.png/okuloff.png), açıklama metni bulunmaktadır. ParentsLoginScreen için.

import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 24,
  },
  infoText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});


const LoginIntro = () => {
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

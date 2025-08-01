// Yönetici giriş ekranı giriş bölümü: logo (okulon.png/okuloff.png), hoşgeldiniz metni bulunmaktadır.

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
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const AdminLoginIntro = ({ fullName }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/okulon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>
        Hoşgeldiniz Sn. {fullName || ''}
      </Text>
    </View>
  );
};

export default AdminLoginIntro;

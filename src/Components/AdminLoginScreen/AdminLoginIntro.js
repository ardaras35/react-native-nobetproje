// Yönetici giriş ekranı giriş bölümü: logo (okulon.png/okuloff.png), hoşgeldiniz metni bulunmaktadır.

import { View, Image, Text, StyleSheet } from 'react-native';

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

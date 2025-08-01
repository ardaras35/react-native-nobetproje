//  Ana giriş butonlarını içerir: Veli Girişi, Yönetici Girişi, Öğretmenlerimiz.  Welcome Screen için.

import { Pressable, Text, View } from 'react-native';
import styles from '../../styles/WelcomeScreenStyle';

const LoginButtons = ({ onNavigate }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={() => onNavigate('ParentsLogin')} style={styles.button}>
        <Text style={styles.buttonText}>Veli Girişi</Text>
      </Pressable>

      <Pressable onPress={() => onNavigate('AdminLogin')} style={[styles.button, styles.buttonSpacing]}>
        <Text style={styles.buttonText}>Yönetici Girişi</Text>
      </Pressable>

      <Pressable onPress={() => onNavigate('Teachers')} style={[styles.button, styles.buttonSpacing]}>
        <Text style={styles.buttonText}>Öğretmenlerimiz</Text>
      </Pressable>
    </View>
  );
};

export default LoginButtons;

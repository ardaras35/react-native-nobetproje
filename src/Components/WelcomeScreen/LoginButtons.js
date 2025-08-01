//  Ana giriş butonlarını içerir: Veli Girişi, Yönetici Girişi, Öğretmenlerimiz.  Welcome Screen için.

import { Pressable, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 14,
    backgroundColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonSpacing: {
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});


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

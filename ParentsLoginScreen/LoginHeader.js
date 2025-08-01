// Veli giriş ekranı üst başlığı: geri tuşu, başlık metni, boş spacer alan. ParentsLoginScreen için.

import { View, Text, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: '#000000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
    textAlign: 'left',
    marginLeft: 12,
  },
  headerSpacer: {
    width: 40,
    height: 40,
  },
});

const LoginHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </Pressable>
      <Text style={styles.headerTitle}>Geri Dön</Text>
      <View style={styles.headerSpacer} />
    </View>
  );
};

export default LoginHeader;

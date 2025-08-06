import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const AdminLoginIntroStyle = StyleSheet.create({
  // Ana intro container
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 30,
  },

  // Logo
  logo: {
    width: 140,
    height: 140,
    marginBottom: 30,
  },

  // Hoşgeldiniz metni
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 10,
  },
});

export default AdminLoginIntroStyle;
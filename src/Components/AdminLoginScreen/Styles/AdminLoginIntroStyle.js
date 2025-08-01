import { StyleSheet } from 'react-native';

const AdminLoginIntroStyle = StyleSheet.create({
  // Ana intro container
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 30,
  },

  // Logo
  logo: {
    width: 120,
    height: 120,
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
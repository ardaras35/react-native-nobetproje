import { StyleSheet } from 'react-native';

const ParentsLoginIntroStyle = StyleSheet.create({
  // Ana intro container
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 30,
    marginBottom: 20,
  },

  // Logo
  logo: {
    width: 140,
    height: 140,
    marginBottom: 24,
  },

  // Bilgi metni
  infoText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 16,
    maxWidth: 300,
  },
});

export default ParentsLoginIntroStyle;
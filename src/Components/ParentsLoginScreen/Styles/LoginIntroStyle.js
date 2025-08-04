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
    width: 150,
    height: 150,
    marginBottom: 74,
  },

  // Bilgi metni
  infoText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 16,
    maxWidth: 300,
    fontWeight:'bold'
  },
});

export default ParentsLoginIntroStyle;
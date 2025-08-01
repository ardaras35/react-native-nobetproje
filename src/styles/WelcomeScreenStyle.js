import { StyleSheet } from 'react-native';

const WelcomeScreenStyle = StyleSheet.create({
  // Ana container
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },

  // Inner content container
  inner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-evenly',
  },

  // Ana başlık
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    lineHeight: 32,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});

export default WelcomeScreenStyle;
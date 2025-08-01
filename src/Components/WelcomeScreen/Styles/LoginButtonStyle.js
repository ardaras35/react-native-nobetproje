import { StyleSheet } from 'react-native';

const LoginButtonsStyle = StyleSheet.create({
  // Ana buton container
  buttonContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    gap: 15,
  },

  // Genel buton styling
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    minHeight: 56,
  },

  // Buton spacing (artık gap kullandığımız için gereksiz ama component'te kullanılmış)
  buttonSpacing: {
    // Gap ile spacing hallediyor, bu class'ı boş bırakabiliriz
  },

  // Buton text styling
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginButtonsStyle;
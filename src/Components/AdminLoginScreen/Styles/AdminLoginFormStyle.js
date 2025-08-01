import { StyleSheet } from 'react-native';

const AdminLoginFormStyle = StyleSheet.create({
  // Ana form container
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },

  // Input label
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 15,
  },

  // Text input (genel)
  input: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },

  // Son input (şifre) - ekstra margin bottom
  lastInput: {
    marginBottom: 30,
  },

  // Giriş butonu
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  // Giriş butonu text
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AdminLoginFormStyle;
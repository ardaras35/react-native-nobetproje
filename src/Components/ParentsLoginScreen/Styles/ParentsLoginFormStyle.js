import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

export default StyleSheet.create({
  formContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  input: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 15,
  },
}
);

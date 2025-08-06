import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const ClockStyle = StyleSheet.create({
  // Clock container
  clockContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },

  // Saat metni
  timeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'monospace', // Dijital saat görünümü için
    marginBottom: 8,
    letterSpacing: 2,
  },

  // Tarih metni
  dateText: {
    fontSize: 18,
    color: '#666',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default ClockStyle;
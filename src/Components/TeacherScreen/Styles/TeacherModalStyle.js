import { StyleSheet, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

const TeacherModalStyle = StyleSheet.create({
  // Modal overlay (arka plan)
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  // Modal içerik container
  content: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    width: width * 0.85,
    maxWidth: 320,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  // Öğretmen fotoğrafı
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#e9ecef',
  },

  // Öğretmen adı
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },

  // Branş
  branch: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },

  // Detay bilgileri (telefon, durum)
  detail: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 22,
  },

  // Buton satırı
  buttonRow: {
    flexDirection: 'row',
    marginTop: 25,
    gap: 15,
  },

  // Ara butonu
  callButton: {
    backgroundColor: '#28a745',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flex: 1,
    elevation: 2,
    shadowColor: '#28a745',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  // Ara butonu text
  callButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Kapat butonu
  closeButton: {
    backgroundColor: '#6c757d',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flex: 1,
    elevation: 2,
    shadowColor: '#6c757d',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  // Kapat butonu text
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TeacherModalStyle;
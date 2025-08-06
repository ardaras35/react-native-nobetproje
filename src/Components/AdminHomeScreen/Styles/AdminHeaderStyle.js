import { StyleSheet, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';

const AdminHeaderStyle = StyleSheet.create({
  // Ana header container
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Safe area için padding
    paddingTop: Platform.OS === 'ios' ? 50 : 15,
  },

  // Geri butonu
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },

  // Header başlığı
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 15,
  },

  // Sağ taraftaki action butonları container
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  // Header button (istatistik butonu)
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF20',
  },

  // Kaydet butonu
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#28a745',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 6,
    elevation: 2,
    shadowColor: '#28a745',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  // Kaydet butonu texti
  saveButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default AdminHeaderStyle;
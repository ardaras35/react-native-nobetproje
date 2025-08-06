import { StyleSheet, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';

const AdminLoginHeaderStyle = StyleSheet.create({
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

  // Geri butonu text (← sembolü)
  backButtonText: {
    fontSize: 20,
    color: '#333',
    fontWeight: '600',
  },

  // Header başlık
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 15,
  },

  // Sağ taraf spacer (balance için)
  headerSpacer: {
    width: 40,
    height: 40,
  },
});

export default AdminLoginHeaderStyle;
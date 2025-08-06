import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const FloorCardStyle = StyleSheet.create({
  // Ana kat kartı container
  floorCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },

  // Kat başlığı
  floorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },

  // Öğretmen satırı (2 öğretmen yan yana)
  teacherRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  // Tek öğretmen bilgisi container
  teacherInfo: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },

  // Öğretmen avatarı
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#e9ecef',
  },

  // Öğretmen adı
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    maxWidth: 120,
    numberOfLines: 2,
  },

  // Timer/durum metni
  timerText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    backgroundColor: '#f8f9fa',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
    fontWeight: '500',
  },
});

export default FloorCardStyle;
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const ResultsHeaderStyle = StyleSheet.create({
  // Ana results header container
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  // Sonuç sayısı texti
  resultsText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
    flex: 1,
  },

  // Yeni öğretmen ekleme butonu
  addTeacherButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007AFF30',
    gap: 6,
    elevation: 1,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  // Yeni öğretmen ekleme butonu texti
  addTeacherButtonText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ResultsHeaderStyle;
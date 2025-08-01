// Admin Panel sonuç başlığı: filtrelenen öğretmen sayısı ve "Yeni Ekle" butonu bulunmaktadır.

import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/SearchAndFilterBarStyle'; 

const ResultsHeader = ({ filteredCount, onAddPress }) => {
  return (
    <View style={styles.resultsHeader}>
      <Text style={styles.resultsText}>
        {filteredCount} öğretmen gösteriliyor
      </Text>

      <TouchableOpacity onPress={onAddPress} style={styles.addTeacherButton}>
        <Ionicons name="add" size={20} color="#007AFF" />
        <Text style={styles.addTeacherButtonText}>Yeni Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultsHeader;

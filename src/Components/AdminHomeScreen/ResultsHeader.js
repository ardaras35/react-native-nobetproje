// Filtrelenmiş öğretmen sayısını gösterir ve "Yeni Ekle" butonunu içerir.
// Admin Panel ekranında öğretmen kartlarının hemen üstünde yer alır.
// Kullanıcı yeni bir öğretmen eklemek istediğinde modal tetiklenir.

import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/AdminHomeScreenStyle';

const ResultsHeader = ({ teacherCount, onAdd }) => {
  return (
    <View style={styles.resultsHeader}>
      {/* Toplam kaç öğretmen gösterildiği bilgisi */}
      <Text style={styles.resultsText}>{teacherCount} öğretmen gösteriliyor</Text>

      {/* Yeni öğretmen ekleme butonu */}
      <TouchableOpacity onPress={onAdd} style={styles.addTeacherButton}>
        <Ionicons name="add" size={20} color="#007AFF" />
        <Text style={styles.addTeacherButtonText}>Yeni Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultsHeader;

// Admin ekranı üst başlık bileşeni: geri tuşu, "Admin Panel" başlığı, istatistik ve kaydet butonları bulunmaktadır.

import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/AdvancedAdminPanelStyle';

const AdminHeader = ({ navigation, onShowStats, onSave }) => {
  return (
    <View style={styles.header}>
      
      {/* Geri tuşu */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* Başlık */}
      <Text style={styles.headerTitle}>Admin Panel</Text>

      {/* Sağ üstteki butonlar: İstatistik ve Kaydet */}
      <View style={styles.headerActions}>
        
        {/* İstatistik butonu */}
        <TouchableOpacity onPress={onShowStats} style={styles.headerButton}>
          <Ionicons name="stats-chart" size={20} color="#007AFF" />
        </TouchableOpacity>

        {/* Kaydet butonu */}
        <TouchableOpacity onPress={onSave} style={styles.saveButton}>
          <Ionicons name="save" size={16} color="#fff" />
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminHeader;

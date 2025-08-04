// İstatistik modalı: öğretmen durumları, kat dağılımı ve genel istatistikleri gösterir.
// Admin panelinde istatistik butonuna basıldığında açılır.

import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/StatsModalStyle';

const StatsModal = ({ visible, onClose, statistics }) => {
  const statusColors = {
    'Nöbetçi': '#4CAF50',
    'Derste': '#2196F3',
    'İzinli': '#FF9800'
  };

  const getPercentage = (count, total) => {
    return total > 0 ? Math.round((count / total) * 100) : 0;
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.statsModal}>
          
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>📊 İstatistikler</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            
            {/* Genel Özet */}
            <View style={styles.summaryCard}>
              <Text style={styles.cardTitle}>Genel Durum</Text>
              <Text style={styles.totalCount}>
                Toplam {statistics?.total || 0} Öğretmen
              </Text>
            </View>

            {/* Durum İstatistikleri */}
            <View style={styles.statsCard}>
              <Text style={styles.cardTitle}>Durum Dağılımı</Text>
              
              <View style={styles.statItem}>
                <View style={styles.statHeader}>
                  <View style={[styles.statusDot, { backgroundColor: statusColors.Nöbetçi }]} />
                  <Text style={styles.statLabel}>Nöbetçi</Text>
                </View>
                <View style={styles.statNumbers}>
                  <Text style={styles.statCount}>{statistics?.nobetci || 0}</Text>
                  <Text style={styles.statPercent}>
                    %{getPercentage(statistics?.nobetci || 0, statistics?.total || 0)}
                  </Text>
                </View>
              </View>

              <View style={styles.statItem}>
                <View style={styles.statHeader}>
                  <View style={[styles.statusDot, { backgroundColor: statusColors.Derste }]} />
                  <Text style={styles.statLabel}>Derste</Text>
                </View>
                <View style={styles.statNumbers}>
                  <Text style={styles.statCount}>{statistics?.derste || 0}</Text>
                  <Text style={styles.statPercent}>
                    %{getPercentage(statistics?.derste || 0, statistics?.total || 0)}
                  </Text>
                </View>
              </View>

              <View style={styles.statItem}>
                <View style={styles.statHeader}>
                  <View style={[styles.statusDot, { backgroundColor: statusColors.İzinli }]} />
                  <Text style={styles.statLabel}>İzinli</Text>
                </View>
                <View style={styles.statNumbers}>
                  <Text style={styles.statCount}>{statistics?.izinli || 0}</Text>
                  <Text style={styles.statPercent}>
                    %{getPercentage(statistics?.izinli || 0, statistics?.total || 0)}
                  </Text>
                </View>
              </View>
            </View>

            {/* Kat Dağılımı */}
            <View style={styles.statsCard}>
              <Text style={styles.cardTitle}>Kat Dağılımı</Text>
              
              {[1, 2, 3, 4, 5].map((floor) => (
                <View key={floor} style={styles.floorItem}>
                  <View style={styles.floorHeader}>
                    <Ionicons name="business" size={16} color="#666" />
                    <Text style={styles.floorLabel}>{floor}. Kat</Text>
                  </View>
                  <View style={styles.floorCount}>
                    <Text style={styles.floorNumber}>
                      {statistics?.floorStats?.[floor] || 0}
                    </Text>
                    <Text style={styles.floorMax}>/ 2</Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Hızlı Bilgiler */}
            <View style={styles.quickInfo}>
              <Text style={styles.quickInfoTitle}>💡 Hızlı Bilgiler</Text>
              <Text style={styles.quickInfoText}>
                • Her katta maksimum 2 öğretmen olabilir
              </Text>
              <Text style={styles.quickInfoText}>
                • Derste veya izinli öğretmenler kat değiştiremez
              </Text>
              <Text style={styles.quickInfoText}>
                • İstatistikler gerçek zamanlı güncellenir
              </Text>
            </View>

          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default StatsModal;
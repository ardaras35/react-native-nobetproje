// Öğretmen listesi boş olduğunda gösterilen bileşendir.
// Arama sonucu bulunamazsa ya da hiç öğretmen yoksa kullanıcıya bilgi verir.

import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/AdminHomeScreenStyle';

const EmptyState = () => {
  return (
    <View style={styles.emptyState}>
      {/* Boş durumu simgeleyen ikon */}
      <Ionicons name="school-outline" size={64} color="#ccc" />

      {/* Ana mesaj */}
      <Text style={styles.emptyStateText}>Öğretmen bulunamadı</Text>

      {/* Açıklayıcı alt mesaj */}
      <Text style={styles.emptyStateSubtext}>
        Arama kriterlerini değiştirin veya yeni öğretmen ekleyin
      </Text>
    </View>
  );
};

export default EmptyState;

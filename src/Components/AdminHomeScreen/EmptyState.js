// Öğretmen listesi boş olduğunda gösterilen bileşendir.
// Arama sonucu bulunamazsa ya da hiç öğretmen yoksa kullanıcıya bilgi verir.

import { View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/EmptyStateStyle';

const EmptyState = () => {
  return (
    <View style={styles.emptyState}>

      <Ionicons name="school-outline" size={64} color="#ccc" />
      <Text style={styles.emptyStateText}>Öğretmen bulunamadı</Text>
      <Text style={styles.emptyStateSubtext}>
        Arama kriterlerini değiştirin veya yeni öğretmen ekleyin
      </Text>
    </View>
  );
};

export default EmptyState;

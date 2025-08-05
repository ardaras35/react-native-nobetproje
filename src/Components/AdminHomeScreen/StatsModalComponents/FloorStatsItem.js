import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FloorStatsItem = ({ floor, count, maxCapacity = 2, styles }) => {
  return (
    <View style={styles.floorItem}>
      <View style={styles.floorHeader}>
        <Ionicons name="business" size={16} color="#666" />
        <Text style={styles.floorLabel}>{floor}. Kat</Text>
      </View>
      <View style={styles.floorCount}>
        <Text style={styles.floorNumber}>{count || 0}</Text>
        <Text style={styles.floorMax}>/ {maxCapacity}</Text>
      </View>
    </View>
  );
};

export default FloorStatsItem;
import { View, Text } from 'react-native';

const statusColors = {
  'Nöbetçi': '#4CAF50',
  'Derste': '#2196F3',
  'İzinli': '#FF9800',
  'Atanmadı': '#9E9E9E'
};

const StatusBadge = ({ status, styles }) => {
  return (
    <View style={styles.statusBadge}>
      <View style={[styles.statusDot, { backgroundColor: statusColors[status] }]} />
      <Text style={styles.statusText}>{status}</Text>
    </View>
  );
};

export default StatusBadge;
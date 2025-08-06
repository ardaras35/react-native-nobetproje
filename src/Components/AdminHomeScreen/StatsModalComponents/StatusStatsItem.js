import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const StatusStatsItem = ({ status, count, total, color, styles }) => {
  const getPercentage = (count, total) => {
    return total > 0 ? Math.round((count / total) * 100) : 0;
  };

  return (
    <View style={styles.statItem}>
      <View style={styles.statHeader}>
        <View style={[styles.statusDot, { backgroundColor: color }]} />
        <Text style={styles.statLabel}>{status}</Text>
      </View>
      <View style={styles.statNumbers}>
        <Text style={styles.statCount}>{count || 0}</Text>
        <Text style={styles.statPercent}>
          %{getPercentage(count || 0, total || 0)}
        </Text>
      </View>
    </View>
  );
};

export default StatusStatsItem;
import { View, Text } from 'react-native';
import FloorStatsItem from './FloorStatsItem';

const FloorDistribution = ({ statistics, styles }) => {
  const floors = [1, 2, 3, 4, 5];

  return (
    <View style={styles.statsCard}>
      <Text style={styles.cardTitle}>Kat Dağılımı</Text>
      
      {floors.map((floor) => (
        <FloorStatsItem
          key={floor}
          floor={floor}
          count={statistics?.floorStats?.[floor]}
          styles={styles}
        />
      ))}
    </View>
  );
};

export default FloorDistribution;
import React from 'react';
import { View, Text } from 'react-native';
import StatusStatsItem from './StatusStatsItem';

const statusColors = {
  'Nöbetçi': '#4CAF50',
  'Derste': '#2196F3',
  'İzinli': '#FF9800'
};

const StatusDistribution = ({ statistics, styles }) => {
  const statusData = [
    { 
      status: 'Nöbetçi', 
      count: statistics?.nobetci, 
      color: statusColors.Nöbetçi 
    },
    { 
      status: 'Derste', 
      count: statistics?.derste, 
      color: statusColors.Derste 
    },
    { 
      status: 'İzinli', 
      count: statistics?.izinli, 
      color: statusColors.İzinli 
    }
  ];

  return (
    <View style={styles.statsCard}>
      <Text style={styles.cardTitle}>Durum Dağılımı</Text>
      
      {statusData.map((item) => (
        <StatusStatsItem
          key={item.status}
          status={item.status}
          count={item.count}
          total={statistics?.total}
          color={item.color}
          styles={styles}
        />
      ))}
    </View>
  );
};

export default StatusDistribution;
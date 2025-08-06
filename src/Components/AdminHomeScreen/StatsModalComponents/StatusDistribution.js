import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import StatusStatsItem from './StatusStatsItem';

const StatusDistribution = ({ statistics, styles }) => {
  const { t } = useTranslation();
  
  const statusColors = {
    [t('nobetci')]: '#4CAF50',
    [t('derste')]: '#2196F3',
    [t('izinli')]: '#FF9800'
  };

  const statusData = [
    { 
      status: t('nobetci'), 
      count: statistics?.nobetci, 
      color: statusColors[t('nobetci')]
    },
    { 
      status: t('derste'), 
      count: statistics?.derste, 
      color: statusColors[t('derste')]
    },
    { 
      status: t('izinli'), 
      count: statistics?.izinli, 
      color: statusColors[t('izinli')]
    }
  ];

  return (
    <View style={styles.statsCard}>
      <Text style={styles.cardTitle}>{t('durum_dagilimi')}</Text>
      
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
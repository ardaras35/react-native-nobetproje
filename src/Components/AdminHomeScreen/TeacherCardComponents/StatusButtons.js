import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';

const StatusButtons = ({ currentStatus, onStatusUpdate, styles }) => {
  const { t } = useTranslation();

  const statusColors = {
    [t('nobetci')]: '#4CAF50',
    [t('derste')]:  '#2196F3',
    [t('izinli')]:  '#FF9800',
    [t('atanmadi')]: '#9E9E9E'
  };

  const statusOptions = [t('nobetci'), t('derste'), t('izinli')];

  return (
    <View>
      <Text style={styles.sectionTitle}>{t('durum_guncelle')}</Text>
      <View style={styles.statusButtons}>
        {statusOptions.map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.statusButton,
              { backgroundColor: statusColors[status] },
              currentStatus === status && styles.activeStatusButton
            ]}
            onPress={() => onStatusUpdate(status)}
          >
            <Text style={styles.statusButtonText}>{status}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default StatusButtons;

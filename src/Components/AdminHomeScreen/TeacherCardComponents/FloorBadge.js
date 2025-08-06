import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

const FloorBadge = ({ floor, styles }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.floorBadge}>
      <Text style={styles.floorText}>
        {floor ? `${floor}. ${t('kat')}` : t('kat_yok')}
      </Text>
    </View>
  );
};

export default FloorBadge;
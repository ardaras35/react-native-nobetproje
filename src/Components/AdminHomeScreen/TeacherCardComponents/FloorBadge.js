import React from 'react';
import { View, Text } from 'react-native';

const FloorBadge = ({ floor, styles }) => {
  return (
    <View style={styles.floorBadge}>
      <Text style={styles.floorText}>
        {floor ? `${floor}. Kat` : 'Kat Yok'}
      </Text>
    </View>
  );
};

export default FloorBadge;
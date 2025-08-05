import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const statusColors = {
  'Nöbetçi': '#4CAF50',
  'Derste': '#2196F3',
  'İzinli': '#FF9800',
  'Atanmadı': '#9E9E9E'
};

const StatusButtons = ({ currentStatus, onStatusUpdate, styles }) => {
  const statusOptions = ['Nöbetçi', 'Derste', 'İzinli'];

  return (
    <View>
      <Text style={styles.sectionTitle}>Durum Güncelle</Text>
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
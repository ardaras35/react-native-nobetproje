import { View, Text, TouchableOpacity } from 'react-native';

const AdminStatusControls = ({ teacher, onStatusChange, styles }) => {
  const statusColors = {
    'Nöbetçi': '#4CAF50',
    'Derste': '#2196F3',
    'İzinli': '#FF9800'
  };

  const statusOptions = ['Nöbetçi', 'Derste', 'İzinli'];

  return (
    <View>
      <Text style={styles.sectionTitle}>Durum Değiştir</Text>
      <View style={styles.statusButtons}>
        {statusOptions.map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.statusButton,
              { backgroundColor: statusColors[status] },
              teacher.durum === status && styles.activeStatusButton,
            ]}
            onPress={() => onStatusChange?.(teacher.id, status)}
          >
            <Text style={styles.statusButtonText}>{status}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AdminStatusControls;
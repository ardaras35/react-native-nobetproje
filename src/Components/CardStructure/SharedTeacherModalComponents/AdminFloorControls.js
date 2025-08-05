import { View, Text, TouchableOpacity } from 'react-native';

const AdminFloorControls = ({ teacher, onFloorChange, styles }) => {
  const floors = [1, 2, 3, 4, 5];

  return (
    <View>
      <Text style={styles.sectionTitle}>Kat Ata</Text>
      <View style={styles.floorButtons}>
        {floors.map((floor) => {
          const isActive = teacher.kat === floor;
          const isDisabled = teacher.durum === 'Derste' || teacher.durum === 'İzinli';
          
          return (
            <TouchableOpacity
              key={floor}
              style={[
                styles.floorButton,
                isActive && styles.activeFloorButton,
                isDisabled && styles.disabledButton,
              ]}
              onPress={() => onFloorChange?.(teacher.id, floor)}
              disabled={isDisabled}
            >
              <Text style={[
                styles.floorButtonText,
                isActive && styles.activeFloorButtonText,
              ]}>
                {floor}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default AdminFloorControls;
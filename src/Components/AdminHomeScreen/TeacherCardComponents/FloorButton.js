import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FloorButtons = ({ currentFloor, currentStatus, onFloorUpdate, styles }) => {
  const floors = [1, 2, 3, 4, 5];
  const isDisabled = currentStatus === 'İzinli' || currentStatus === 'Derste';

  return (
    <View>
      <Text style={styles.sectionTitle}>Kat Ataması</Text>
      <View style={styles.floorButtons}>
        {floors.map((floor) => (
          <TouchableOpacity
            key={floor}
            style={[
              styles.floorButton,
              currentFloor === floor && styles.activeFloorButton,
              isDisabled && styles.disabledButton
            ]}
            onPress={() => onFloorUpdate(floor)}
            disabled={isDisabled}
          >
            <Text
              style={[
                styles.floorButtonText,
                currentFloor === floor && styles.activeFloorButtonText
              ]}
            >
              {floor}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default FloorButtons;
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

const AdminFloorControls = ({ teacher, onFloorChange, styles }) => {
  const { t } = useTranslation();
  const floors = [1, 2, 3, 4, 5];

  return (
    <View>
      <Text style={styles.sectionTitle}>{t('kat_ata')}</Text>
      <View style={styles.floorButtons}>
        {floors.map((floor) => {
          const isActive = teacher.kat === floor;
          const isDisabled = teacher.durum === t('derste') || teacher.durum === t('izinli');
          
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
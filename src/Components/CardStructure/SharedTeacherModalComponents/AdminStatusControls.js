import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

const AdminStatusControls = ({ teacher, onStatusChange, styles }) => {
  const { t } = useTranslation();
  const statusColors = {
    [t('nobetci')]: '#4CAF50',
    [t('derste')]: '#2196F3',
    [t('izinli')]: '#FF9800'
  };

  const statusOptions = [t('nobetci'), t('derste'), t('izinli')];

  return (
    <View>
      <Text style={styles.sectionTitle}>{t('durum_degistir')}</Text>
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

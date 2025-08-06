import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const StatusBadge = ({ status, styles }) => {
  const { t } = useTranslation();

  const statusColors = {
    [t('nobetci')]: '#4CAF50',
    [t('derste')]:  '#2196F3',
    [t('izinli')]:  '#FF9800',
    [t('atanmadi')]: '#9E9E9E'
  };

  return (
    <View style={styles.statusBadge}>
      <View style={[styles.statusDot, { backgroundColor: statusColors[status] }]} />
      <Text style={styles.statusText}>{status}</Text>
    </View>
  );
};

export default StatusBadge;

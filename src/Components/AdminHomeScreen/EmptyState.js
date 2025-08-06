import { View, Text} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/EmptyStateStyle';

const EmptyState = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.emptyState}>
      <Ionicons name="school-outline" size={64} color="#ccc" />
      <Text style={styles.emptyStateText}>{t('ogretmen_bulunamadi')}</Text>
      <Text style={styles.emptyStateSubtext}>
        {t('arama_kriterlerini_degistirin_')}
      </Text>
    </View>
  );
};

export default EmptyState;
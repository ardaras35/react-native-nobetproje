import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const SummaryCard = ({ total, styles }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.summaryCard}>
      <Text style={styles.cardTitle}>{t('genel_durum')}</Text>
      <Text style={styles.totalCount}>
        {t('toplam')} {total || 0} {t('ogretmen')}
      </Text>
    </View>
  );
};

export default SummaryCard;
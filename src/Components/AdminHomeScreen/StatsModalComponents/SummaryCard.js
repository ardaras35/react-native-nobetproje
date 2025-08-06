import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const SummaryCard = ({ total, styles }) => {
  return (
    <View style={styles.summaryCard}>
      <Text style={styles.cardTitle}>Genel Durum</Text>
      <Text style={styles.totalCount}>
        Toplam {total || 0} Öğretmen
      </Text>
    </View>
  );
};

export default SummaryCard;
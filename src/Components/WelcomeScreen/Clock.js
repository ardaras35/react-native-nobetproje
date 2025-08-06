// Canlı saat ve tarih gösterimini sağlar.  Welcome Screen için.

import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/ClockStyle';

const Clock = ({ now }) => {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'tr' ? 'tr-TR' : 'en-US';

  const timeDisplay = now.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const dateDisplay = now.toLocaleDateString(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <View style={styles.clockContainer}>
      <Text style={styles.timeText}>{timeDisplay}</Text>
      <Text style={styles.dateText}>{dateDisplay}</Text>
    </View>
  );
};

export default Clock;

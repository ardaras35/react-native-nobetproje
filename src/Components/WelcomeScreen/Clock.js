// Canlı saat ve tarih gösterimini sağlar.  Welcome Screen için.

import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  clockContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  timeText: {
    fontSize: 48,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

const Clock = ({ now }) => {
  const timeDisplay = now.toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const dateDisplay = now.toLocaleDateString('tr-TR', {
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

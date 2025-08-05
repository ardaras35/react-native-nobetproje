import { View, Text } from 'react-native';

const QuickInfo = ({ styles }) => {
  const infoItems = [
    "Her katta maksimum 2 öğretmen olabilir.",
    "Derste veya izinli öğretmenler kat değiştiremez.",
    "İstatistikler gerçek zamanlı güncellenir."
  ];

  return (
    <View style={styles.quickInfo}>
      <Text style={styles.quickInfoTitle}> Hızlı Bilgiler</Text>
      {infoItems.map((item, index) => (
        <Text key={index} style={styles.quickInfoText}>
          • {item}
        </Text>
      ))}
    </View>
  );
};

export default QuickInfo;
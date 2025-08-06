import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const QuickInfo = ({ styles }) => {
  const { t } = useTranslation();
  const infoItems = [
    "Her katta maksimum 2 öğretmen olabilir.",
    t('derste_veya_izinli_ogretmenler'),
    t('istatistikler_gercek_zamanli_g')
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
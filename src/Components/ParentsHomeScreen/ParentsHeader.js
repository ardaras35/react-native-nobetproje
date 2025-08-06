// ParentsHome ekranı üst başlık bileşeni: geri tuşu, "Kat Bilgisi" başlığı bulunmaktadır.

import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './Styles/ParentsHeaderStyle';

const ParentsHeader = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.header}>{t('kat_bilgisi')}</Text>
      <View style={{ width: 24 }} /> 
    </View>
  );
};

export default ParentsHeader;
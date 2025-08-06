// Öğretmen küçük kart bileşeni. FloorCard içerisinde kullanılıyor.

import { Text, Image, Alert, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import imageMap from '../../utils/imageMap';
import styles from './Styles/TeacherCardMiniStyle';

const TeacherCardMini = ({ teacher }) => {
  const { t } = useTranslation();
  const source =
    imageMap[teacher?.image?.replace('.png', '')] || require('../../../assets/default.png');

  const showDetails = () => {
    Alert.alert(
      t('ogretmen_bilgisi'),
      `${teacher.ad}\n${teacher.brans}\n${t('durum')}: ${teacher.durum}`
    );
  };

  return (
    <TouchableOpacity style={styles.card} onPress={showDetails}>
      <Image source={source} style={styles.avatar} />
      <Text style={styles.name}>{teacher.ad}</Text>
    </TouchableOpacity>
  );
};

export default TeacherCardMini;
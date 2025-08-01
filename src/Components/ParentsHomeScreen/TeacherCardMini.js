// Öğretmen küçük kart bileşeni. FloorCard içerisinde kullanılıyor.

import { Text, Image, Alert, TouchableOpacity } from 'react-native';
import imageMap from '../../utils/imageMap';
import styles from '../../styles/ParentsHomeScreenStyle';

const TeacherCardMini = ({ teacher }) => {
  const source =
    imageMap[teacher?.image?.replace('.png', '')] || require('../../../assets/default.png');

  const showDetails = () => {
    Alert.alert(
      'Öğretmen Bilgisi',
      `${teacher.ad}\n${teacher.brans}\nDurum: ${teacher.durum}`
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

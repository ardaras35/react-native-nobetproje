// Öğretmen küçük kart bileşeni. FloorCard içerisinde kullanılıyor.

import { View, Text, Image, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import imageMap from '../../utils/imageMap';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    gap: 6,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

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

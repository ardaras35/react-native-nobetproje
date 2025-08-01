// Öğretmen bilgilerini gösteren kart bileşeni: fotoğraf, ad, branş, durum ve kat bilgisi içerir.

import { View, Text, Image, Pressable } from 'react-native';
import styles from './Styles/TeacherCardStyle'
import { getTeacherImage } from '../../utils/imageMap';

const TeacherCard = ({ teacher, onPress }) => {
const imageSource = getTeacherImage(teacher?.image);

  return (
    <Pressable style={styles.card} onPress={() => onPress(teacher)}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{teacher.ad}</Text>
      <Text style={styles.branch}>{teacher.brans}</Text>
      <Text style={styles.branch}>Durum: {teacher.durum || 'Atanmadı'}</Text>
      <Text style={styles.branch}>Kat: {teacher.kat || '-'}</Text>
    </Pressable>
  );
};

export default TeacherCard;

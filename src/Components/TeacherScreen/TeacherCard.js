// Öğretmen bilgilerini gösteren kart bileşeni: fotoğraf, ad, branş, durum ve kat bilgisi içerir.

import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const TeacherCard = ({ teacher, onPress, imageMap }) => {
  return (
    <Pressable style={styles.card} onPress={() => onPress(teacher)}>
      <Image
        source={imageMap[teacher.image]}
        style={styles.image}
      />
      <Text style={styles.name}>{teacher.ad}</Text>
      <Text style={styles.branch}>{teacher.brans}</Text>
      <Text style={styles.branch}>Durum: {teacher.durum || 'Atanmadı'}</Text>
      <Text style={styles.branch}>Kat: {teacher.kat || '-'}</Text>
    </Pressable>
  );
};

export default TeacherCard;

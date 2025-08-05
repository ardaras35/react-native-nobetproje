import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import imageMap from '../../../utils/imageMap';

const TeacherInfoItem = ({ teacher, floorNumber, index, styles }) => {
  const key = teacher
    ? `teacher-${floorNumber}-${teacher.id}`
    : `empty-${floorNumber}-${index}`;

  if (!teacher) {
    return (
      <View key={key} style={styles.teacherInfo}>
        <Text>---</Text>
      </View>
    );
  }

  const imageKey = teacher?.image?.replace('.png', '');
  const img = imageMap[imageKey] ?? require('../../../../assets/default.png');

  const handlePress = () => {
    Alert.alert(
      'Öğretmen Bilgisi',
      `${teacher.ad}\n${teacher.brans}\nDurum: ${teacher.durum}`
    );
  };

  return (
    <TouchableOpacity
      key={key}
      style={styles.teacherInfo}
      onPress={handlePress}
    >
      <Image source={img} style={styles.avatar} />
      <Text style={styles.name}>{teacher.ad}</Text>
    </TouchableOpacity>
  );
};

export default TeacherInfoItem;
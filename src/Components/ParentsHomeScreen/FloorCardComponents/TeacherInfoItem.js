import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
    Alert.alert(
      t('ogretmen_bilgisi'),
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
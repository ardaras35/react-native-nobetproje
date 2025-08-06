import { View, Image, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getTeacherImage } from '../../../utils/imageMap';

const TeacherAvatar = ({ teacher, styles }) => {
  const img = getTeacherImage(teacher.image);

  return (
    <View style={styles.teacherInfo}>
      <Image source={img} style={styles.avatar} />
      <View style={styles.teacherDetails}>
        <Text style={styles.teacherName}>{teacher.ad}</Text>
        <Text style={styles.teacherBranch}>{teacher.brans}</Text>
      </View>
    </View>
  );
};

export default TeacherAvatar;
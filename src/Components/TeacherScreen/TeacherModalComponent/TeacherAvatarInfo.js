import { View, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getTeacherImage } from '../../../utils/imageMap';

const TeacherAvatarInfo = ({ teacher, styles }) => {
  const imageSource = getTeacherImage(teacher.image);

  return (
    <View>
      <Image
        source={imageSource}
        style={styles.image}
      />
      <Text style={styles.name}>{teacher?.ad}</Text>
      <Text style={styles.branch}>{teacher?.brans}</Text>
    </View>
  );
};

export default TeacherAvatarInfo;
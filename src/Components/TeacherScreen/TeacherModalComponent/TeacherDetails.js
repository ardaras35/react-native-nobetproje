import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const TeacherDetails = ({ teacher, styles }) => {
  return (
    <View>
      <Text style={styles.detail}>
        Telefon: {teacher?.telefon}
      </Text>
      <Text style={styles.detail}>
        Durum: {teacher?.durum || 'Bilinmiyor'}
      </Text>
    </View>
  );
};

export default TeacherDetails;
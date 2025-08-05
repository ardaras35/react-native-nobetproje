import { View, Text } from 'react-native';

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
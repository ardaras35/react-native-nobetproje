import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import TeacherInfoItem from './TeacherInfoItem';

const TeacherRow = ({ teachers, floorNumber, styles }) => {
  const [leftTeacher, rightTeacher] = [teachers[0], teachers[1]];

  return (
    <View style={styles.teacherRow}>
      <TeacherInfoItem
        teacher={leftTeacher}
        floorNumber={floorNumber}
        index={0}
        styles={styles}
      />
      <TeacherInfoItem
        teacher={rightTeacher}
        floorNumber={floorNumber}
        index={1}
        styles={styles}
      />
    </View>
  );
};

export default TeacherRow;
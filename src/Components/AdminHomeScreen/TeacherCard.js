import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/TeacherCardStyle';

import TeacherAvatar from './TeacherCardComponents/TeacherAvatar';
import StatusBadge from './TeacherCardComponents/StatusBadge';
import FloorBadge from './TeacherCardComponents/FloorBadge';
import StatusButtons from './TeacherCardComponents/StatusButtons';
import FloorButtons from './TeacherCardComponents/FloorButton';
import DeleteButton from './TeacherCardComponents/DeleteButton';

const TeacherCard = ({
  teacher,
  updateStatus,
  updateFloor,
  removeTeacher
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <TeacherAvatar teacher={teacher} styles={styles} />
        <StatusBadge status={teacher.durum} styles={styles} />
        <FloorBadge floor={teacher.kat} styles={styles} />
      </View>

      <View style={styles.actionSection}>
        <StatusButtons
          currentStatus={teacher.durum}
          onStatusUpdate={(status) => updateStatus(teacher.id, status)}
          styles={styles}
        />

        <FloorButtons
          currentFloor={teacher.kat}
          currentStatus={teacher.durum}
          onFloorUpdate={(floor) => updateFloor(teacher.id, floor)}
          styles={styles}
        />

        <DeleteButton
          onDelete={() => removeTeacher(teacher.id)}
          styles={styles}
        />
      </View>
    </View>
  );
};

export default TeacherCard;
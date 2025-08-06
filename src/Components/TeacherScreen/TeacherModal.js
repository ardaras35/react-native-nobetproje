import { View, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/TeacherModalStyle';

import TeacherAvatarInfo from './TeacherModalComponent/TeacherAvatarInfo';
import TeacherDetails from './TeacherModalComponent/TeacherDetails';
import ModalActionButtons from './TeacherModalComponent/ModalActionButtons';
import CallHandler from './TeacherModalComponent/CallHandler';

const TeacherModal = ({ visible, teacher, onClose }) => {
  const { t } = useTranslation();
  if (!visible || !teacher) return null;

  const handleCall = () => {
    CallHandler.handleCall(teacher);
  };

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <TeacherAvatarInfo teacher={teacher} styles={styles} />
          <TeacherDetails teacher={teacher} styles={styles} />
          <ModalActionButtons onCall={handleCall} onClose={onClose} styles={styles} />
        </View>
      </View>
    </Modal>
  );
};

export default TeacherModal;

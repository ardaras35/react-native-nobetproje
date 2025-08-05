import { View, Modal } from 'react-native';
import styles from './Styles/TeacherModalStyle';

import TeacherAvatarInfo from './TeacherModalComponents/TeacherAvatarInfo';
import TeacherDetails from './TeacherModalComponents/TeacherDetails';
import ModalActionButtons from './TeacherModalComponents/ModalActionButtons';
import CallHandler from './TeacherModalComponents/CallHandler';

const TeacherModal = ({ visible, teacher, onClose }) => {
  if (!visible || !teacher) {
    return null;
  }

  const handleCall = () => {
    CallHandler.handleCall(teacher);
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          
          <TeacherAvatarInfo 
            teacher={teacher}
            styles={styles}
          />
          
          <TeacherDetails 
            teacher={teacher}
            styles={styles}
          />

          <ModalActionButtons
            onCall={handleCall}
            onClose={onClose}
            styles={styles}
          />

        </View>
      </View>
    </Modal>
  );
};

export default TeacherModal;
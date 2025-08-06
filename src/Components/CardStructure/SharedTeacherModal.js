import { View, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '../CardStructure/SharedTeacherModalComponents/Styles/SharedTeacherModalStyle';

import ModalCloseButton from './SharedTeacherModalComponents/ModalCloseButton';
import TeacherProfileSection from './SharedTeacherModalComponents/TeacherProfileSection';
import AdminStatusControls from './SharedTeacherModalComponents/AdminStatusControls';
import AdminFloorControls from './SharedTeacherModalComponents/AdminFloorControls';
import ModalActionRow from './SharedTeacherModalComponents/ModalActionRow';
import ModalCallHandler from './SharedTeacherModalComponents/ModalCallHandler';

const SharedTeacherModal = ({ 
  visible, 
  teacher, 
  onClose, 
  onStatusChange, 
  onFloorChange, 
  onDelete, 
  isAdminMode = false 
}) => {
  const { t } = useTranslation();
  if (!visible || !teacher) return null;

  const handleCall = () => {
    ModalCallHandler.handleCall(teacher);
  };

  const handleDelete = () => {
    ModalCallHandler.handleDelete(teacher, onDelete, onClose);
  };

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <ModalCloseButton onClose={onClose} styles={styles} />
          <TeacherProfileSection teacher={teacher} styles={styles} />
          {isAdminMode && (
            <View style={styles.adminControls}>
              <AdminStatusControls teacher={teacher} onStatusChange={onStatusChange} styles={styles} />
              <AdminFloorControls teacher={teacher} onFloorChange={onFloorChange} styles={styles} />
            </View>
          )}
          <ModalActionRow teacher={teacher} onCall={handleCall} onDelete={handleDelete} isAdminMode={isAdminMode} styles={styles} />
        </View>
      </View>
    </Modal>
  );
};

export default SharedTeacherModal;

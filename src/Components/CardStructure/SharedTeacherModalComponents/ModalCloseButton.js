import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ModalCloseButton = ({ onClose, styles }) => {
  return (
    <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
      <Ionicons name="close" size={24} color="#666" />
    </TouchableOpacity>
  );
};

export default ModalCloseButton;
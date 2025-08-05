import { View, TouchableOpacity, Text } from 'react-native';

const ModalActionButtons = ({ onCall, onClose, styles }) => {
  return (
    <View style={styles.buttonRow}>
      <TouchableOpacity onPress={onCall} style={styles.callButton}>
        <Text style={styles.callButtonText}>Ara</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Kapat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalActionButtons;
import { View, TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const ModalActionButtons = ({ onCall, onClose, styles }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.buttonRow}>
      <TouchableOpacity onPress={onCall} style={styles.callButton}>
        <Text style={styles.callButtonText}>{t('ara')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>{t('kapat')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalActionButtons;
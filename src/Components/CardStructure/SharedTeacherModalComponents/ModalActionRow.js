import { View, TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

const ModalActionRow = ({ 
  teacher, 
  onCall, 
  onDelete, 
  isAdminMode, 
  styles 
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.buttonRow}>
      {teacher?.telefon && (
        <TouchableOpacity onPress={onCall} style={styles.callButton}>
          <Ionicons name="call" size={16} color="#fff" />
          <Text style={styles.callButtonText}>{t('ara')}</Text>
        </TouchableOpacity>
      )}
      
      {isAdminMode && onDelete && (
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Ionicons name="trash" size={16} color="#fff" />
          <Text style={styles.deleteButtonText}>{t('sil')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ModalActionRow;
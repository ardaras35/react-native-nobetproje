import { View, Text, Image, Modal, TouchableOpacity, Alert, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getTeacherImage } from '../utils/imageMap';
import styles from './Styles/SharedTeacherModalStyle';

const SharedTeacherModal = ({ 
  visible, 
  teacher, 
  onClose, 
  onStatusChange, 
  onFloorChange, 
  onDelete, 
  isAdminMode = false 
}) => {
  
  const handleCall = () => {
    if (!teacher?.telefon) {
      Alert.alert('Uyarı', 'Telefon numarası bulunamadı.');
      return;
    }

    const dialNumber = `tel:${teacher.telefon}`;

    if (teacher?.durum === 'İzinli' || teacher?.durum === 'Derste') {
      const durum = teacher.durum || 'Bilinmeyen durumda';
      Alert.alert(
        'Emin misiniz?',
        `${durum} olan bir öğretmeni aramak üzeresiniz. Devam etmek istiyor musunuz?`,
        [
          { text: 'İptal', style: 'cancel' },
          { text: 'Ara', onPress: () => Linking.openURL(dialNumber) }
        ]
      );
    } else {
      Linking.openURL(dialNumber);
    }
  };

  const handleDelete = () => {
    Alert.alert(
      'Öğretmeni Sil',
      `${teacher.ad} adlı öğretmeni silmek istediğinizden emin misiniz?`,
      [
        { text: 'İptal', style: 'cancel' },
        { 
          text: 'Sil', 
          style: 'destructive', 
          onPress: () => {
            onDelete?.(teacher.id);
            onClose();
          }
        }
      ]
    );
  };

  const statusColors = {
    'Nöbetçi': '#4CAF50',
    'Derste': '#2196F3',
    'İzinli': '#FF9800'
  };

  if (!visible || !teacher) {
    return null;
  }

  const imageSource = getTeacherImage(teacher.image);

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <Ionicons name="close" size={24} color="#666" />
          </TouchableOpacity>

          <Image source={imageSource} style={styles.image} />
          
          <Text style={styles.name}>{teacher?.ad}</Text>
          <Text style={styles.branch}>{teacher?.brans}</Text>
          
          <View style={styles.statusContainer}>
            <View 
              style={[
                styles.statusDot, 
                { backgroundColor: statusColors[teacher.durum] || '#ccc' }
              ]} 
            />
            <Text style={styles.statusText}>{teacher?.durum || 'Bilinmiyor'}</Text>
          </View>

          <Text style={styles.detail}>
            Kat: {teacher?.kat ? `${teacher.kat}. Kat` : 'Atanmamış'}
          </Text>
          
          {teacher?.telefon && (
            <Text style={styles.detail}>Telefon: {teacher.telefon}</Text>
          )}

          {isAdminMode && (
            <View style={styles.adminControls}>
              <Text style={styles.sectionTitle}>Durum Değiştir</Text>
              <View style={styles.statusButtons}>
                {['Nöbetçi', 'Derste', 'İzinli'].map((status) => (
                  <TouchableOpacity
                    key={status}
                    style={[
                      styles.statusButton,
                      { backgroundColor: statusColors[status] },
                      teacher.durum === status && styles.activeStatusButton,
                    ]}
                    onPress={() => onStatusChange?.(teacher.id, status)}
                  >
                    <Text style={styles.statusButtonText}>{status}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.sectionTitle}>Kat Ata</Text>
              <View style={styles.floorButtons}>
                {[1, 2, 3, 4, 5].map((floor) => {
                  const isActive = teacher.kat === floor;
                  const isDisabled = teacher.durum === 'Derste' || teacher.durum === 'İzinli';
                  
                  return (
                    <TouchableOpacity
                      key={floor}
                      style={[
                        styles.floorButton,
                        isActive && styles.activeFloorButton,
                        isDisabled && styles.disabledButton,
                      ]}
                      onPress={() => onFloorChange?.(teacher.id, floor)}
                      disabled={isDisabled}
                    >
                      <Text style={[
                        styles.floorButtonText,
                        isActive && styles.activeFloorButtonText,
                      ]}>
                        {floor}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}

          <View style={styles.buttonRow}>
            {teacher?.telefon && (
              <TouchableOpacity onPress={handleCall} style={styles.callButton}>
                <Ionicons name="call" size={16} color="#fff" />
                <Text style={styles.callButtonText}>Ara</Text>
              </TouchableOpacity>
            )}
            
            {isAdminMode && onDelete && (
              <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
                <Ionicons name="trash" size={16} color="#fff" />
                <Text style={styles.deleteButtonText}>Sil</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SharedTeacherModal;
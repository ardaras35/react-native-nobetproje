// Öğretmen detaylarını gösteren modal bileşeni: ad, branş, durum, telefon bilgisi ve ara/kapat butonları içerir.

import { View, Text, Image, Modal, TouchableOpacity, StyleSheet, Alert, Linking } from 'react-native';

const TeacherModal = ({ visible, teacher, onClose }) => {
  const handleCall = () => {
    if (!teacher?.telefon) {
      Alert.alert('Uyarı', 'Telefon numarası bulunamadı.');
      return;
    }

    const dialNumber = `tel:${teacher.telefon}`;

    if (teacher?.durum === 'İzinli' || teacher?.durum === 'Derste') {
      Alert.alert(
        'Emin misiniz?',
        `${teacher.durum} olan bir öğretmeni aramak üzeresiniz. Devam etmek istiyor musunuz?`,
        [
          { text: 'İptal', style: 'cancel' },
          { text: 'Ara', onPress: () => Linking.openURL(dialNumber) }
        ]
      );
    } else {
      Linking.openURL(dialNumber);
    }
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
          <Image
            source={teacher?.image}
            style={styles.image}
          />
          <Text style={styles.name}>{teacher?.ad}</Text>
          <Text style={styles.branch}>{teacher?.brans}</Text>
          <Text style={styles.detail}>Telefon: {teacher?.telefon}</Text>
          <Text style={styles.detail}>Durum: {teacher?.durum || 'Bilinmiyor'}</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={handleCall} style={styles.callButton}>
              <Text style={styles.callButtonText}>Ara</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TeacherModal;

import { Alert, Linking } from 'react-native';

const ModalCallHandler = {
  handleCall: (teacher) => {
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
  },

  handleDelete: (teacher, onDelete, onClose) => {
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
  }
};

export default ModalCallHandler;
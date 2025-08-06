import { Alert, Linking } from 'react-native';
import { useTranslation } from 'react-i18next';

const CallHandler = {
  handleCall: (teacher) => {
    if (!teacher?.telefon) {
      Alert.alert({t('uyari')}, {t('telefon_numarasi_bulunamadi')});
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
  }
};

export default CallHandler;
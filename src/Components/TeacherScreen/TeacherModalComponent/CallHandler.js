import { Alert, Linking } from 'react-native';
import i18n from '../../../i18n/index';

const CallHandler = {
  handleCall: (teacher) => {
    if (!teacher?.telefon) {
      Alert.alert(i18n.t('uyari'), i18n.t('telefon_numarasi_bulunamadi'));
      return;
    }

    const dialNumber = `tel:${teacher.telefon}`;

    if (teacher?.durum === i18n.t('izinli') || teacher?.durum === i18n.t('derste')) {
      const durum = teacher.durum || i18n.t('bilinmeyen_durumda');
      Alert.alert(
        i18n.t('emin_misiniz'),
        i18n.t('durum_olan_ogretmeni_aramak', { durum }),
        [
          { text: i18n.t('iptal'), style: 'cancel' },
          { text: i18n.t('ara'), onPress: () => Linking.openURL(dialNumber) }
        ]
      );
    } else {
      Linking.openURL(dialNumber);
    }
  }
};

export default CallHandler;
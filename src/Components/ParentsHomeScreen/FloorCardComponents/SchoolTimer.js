import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const SchoolTimer = ({ 
  now, 
  isSchoolOpen, 
  currentSlot, 
  minutesToNextClass, 
  minutesToNextBreak, 
  styles 
}) => {
  const { t } = useTranslation();

  const getTimerText = () => {
    const hour = now.getHours();
    const isWeekend = [0, 6].includes(now.getDay());

    if (!isSchoolOpen) {
      if (isWeekend) {
        return t('okulumuz_hafta_sonu_kapalidir');
      } else if (hour < 9) {
        return t('okulumuz_henuz_acilmadi');
      } else {
        return t('okulumuz_kapalidir');
      }
    }

    if (!currentSlot) {
      return minutesToNextClass !== null
        ? t('derse_baslamak_icin_dakika_kaldi', { minutes: minutesToNextClass })
        : t('ders_programi_yukleniyor');
    }

    switch (currentSlot.type) {
      case 'class':
        return minutesToNextBreak !== null
          ? t('teneffuse_dakika_kaldi', { minutes: minutesToNextBreak })
          : t('su_an_ders_devam_ediyor');
      
      case 'break':
        return minutesToNextClass !== null
          ? t('derse_dakika_kaldi', { minutes: minutesToNextClass })
          : t('su_an_teneffus_zamani');
      
      case 'lunch':
        return minutesToNextClass !== null
          ? t('ogle_arasi_derse_dakika_kaldi', { minutes: minutesToNextClass })
          : t('su_an_ogle_arasi');
      
      default:
        return t('bilinmeyen_durum');
    }
  };

  return (
    <Text style={styles.timerText}>
      {getTimerText()}
    </Text>
  );
};

export default SchoolTimer;
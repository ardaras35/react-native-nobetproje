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
  const getTimerText = () => {
  const { t } = useTranslation();
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
        ? `Derse başlamak için ${minutesToNextClass} dakika kaldı.`
        : t('ders_programi_yukleniyor');
    }

    switch (currentSlot.type) {
      case 'class':
        return minutesToNextBreak !== null
          ? `Teneffüse ${minutesToNextBreak} dakika kaldı.`
          : 'Ders devam ediyor.';
      
      case 'break':
        return minutesToNextClass !== null
          ? `Derse ${minutesToNextClass} dakika kaldı.`
          : t('teneffus_zamani');
      
      case 'lunch':
        return minutesToNextClass !== null
          ? `Öğle arasındadır, derse ${minutesToNextClass} dakika kaldı.`
          : t('ogle_arasi');
      
      default:
        return 'Bilinmeyen durum.';
    }
  };

  return (
    <Text style={styles.timerText}>
      {getTimerText()}
    </Text>
  );
};

export default SchoolTimer;
import { Text } from 'react-native';

const SchoolTimer = ({ 
  now, 
  isSchoolOpen, 
  currentSlot, 
  minutesToNextClass, 
  minutesToNextBreak, 
  styles 
}) => {
  const getTimerText = () => {
    const hour = now.getHours();
    const isWeekend = [0, 6].includes(now.getDay());

    if (!isSchoolOpen) {
      if (isWeekend) {
        return 'Okulumuz hafta sonu kapalıdır.';
      } else if (hour < 9) {
        return 'Okulumuz henüz açılmadı.';
      } else {
        return 'Okulumuz kapalıdır.';
      }
    }

    if (!currentSlot) {
      return minutesToNextClass !== null
        ? `Derse başlamak için ${minutesToNextClass} dakika kaldı.`
        : 'Ders programı yükleniyor...';
    }

    switch (currentSlot.type) {
      case 'class':
        return minutesToNextBreak !== null
          ? `Teneffüse ${minutesToNextBreak} dakika kaldı.`
          : 'Ders devam ediyor.';
      
      case 'break':
        return minutesToNextClass !== null
          ? `Derse ${minutesToNextClass} dakika kaldı.`
          : 'Teneffüs zamanı.';
      
      case 'lunch':
        return minutesToNextClass !== null
          ? `Öğle arasındadır, derse ${minutesToNextClass} dakika kaldı.`
          : 'Öğle arası.';
      
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
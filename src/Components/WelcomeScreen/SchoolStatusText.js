import { Text } from 'react-native';
import { isWeekend } from '../../utils/schedule';
import styles from './Styles/SchoolStatusTextStyle';

const SchoolStatusText = ({ now, isSchoolOpen, currentSlot, minutesToNextClass, minutesToNextBreak }) => {
  let timerText = '';

  if (!isSchoolOpen) {
    if (isWeekend(now)) {
      timerText = 'Okulumuz hafta sonu kapalıdır.';
    } else {
      const currentHour = now.getHours();
      
      if (currentHour < 9) {
        const today9AM = new Date(now);
        today9AM.setHours(9, 0, 0, 0);
        
        const diffMs = today9AM.getTime() - now.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        
        timerText = `Okulun açılmasına: ${diffHours} saat ${diffMinutes} dakika kaldı.`;
      } else {
        timerText = 'Okulumuz bugün için kapandı.';
      }
    }
  } else {
    if (!currentSlot) {
      if (minutesToNextClass !== null) {
        timerText = `Derse başlamak için: ${minutesToNextClass} dakika kaldı.`;
      } else {
        timerText = 'Ders programı yükleniyor...';
      }
    } else if (currentSlot.type === 'class') {
      if (minutesToNextBreak !== null) {
        timerText = `Şu an ders var. Teneffüse: ${minutesToNextBreak} dakika kaldı.`;
      } else {
        timerText = 'Şu an ders devam ediyor.';
      }
    } else if (currentSlot.type === 'break') {
      if (minutesToNextClass !== null) {
        timerText = `Şu an teneffüs. Derse: ${minutesToNextClass} dakika kaldı.`;
      } else {
        timerText = 'Şu an teneffüs zamanı.';
      }
    } else if (currentSlot.type === 'lunch') {
      if (minutesToNextClass !== null) {
        timerText = `Şu an öğle arası. Derse: ${minutesToNextClass} dakika kaldı.`;
      } else {
        timerText = 'Şu an öğle arası.';
      }
    }
  }

  return <Text style={styles.text}>{timerText}</Text>;
};

export default SchoolStatusText;
//  Okulun açık/kapalı durumuna göre kalan süre bilgisini gösterir.  Welcome Screen için.

import { Text } from 'react-native';
import { isWeekend } from '../../utils/schedule';
import styles from '../../styles/WelcomeScreenStyle';

const SchoolStatusText = ({ now, isSchoolOpen, currentSlot, minutesToNextClass, minutesToNextBreak }) => {
  let timerText = '';

  if (!isSchoolOpen) {
    if (isWeekend(now)) {
      const nextMonday = new Date(now);
      const daysUntilMonday = (1 + 7 - nextMonday.getDay()) % 7 || 7;
      nextMonday.setDate(nextMonday.getDate() + daysUntilMonday);
      nextMonday.setHours(9, 0, 0, 0);

      const diffMs = nextMonday.getTime() - now.getTime();
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

      timerText = `Okulun açılmasına: ${diffHours} sa ${diffMinutes} dk`;
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
        const tomorrow9AM = new Date(now);
        tomorrow9AM.setDate(tomorrow9AM.getDate() + 1);
        tomorrow9AM.setHours(9, 0, 0, 0);

        while (isWeekend(tomorrow9AM)) {
          tomorrow9AM.setDate(tomorrow9AM.getDate() + 1);
        }

        const diffMs = tomorrow9AM.getTime() - now.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

        timerText = `Okulun açılmasına: ${diffHours} saat ${diffMinutes} dakika kaldı.`;
      }
    }
  } else {
    if (!currentSlot) {
      timerText = minutesToNextClass !== null ? `Derse başlamak için: ${minutesToNextClass} dk` : 'Ders programı yükleniyor...';
    } else if (currentSlot.type === 'class') {
      timerText = minutesToNextBreak !== null ? `Okulumuz şu an derstedir. Teneffüse kalan: ${minutesToNextBreak} dakika` : 'Ders devam ediyor';
    } else if (currentSlot.type === 'break') {
      timerText = minutesToNextClass !== null ? `Okulumuz şu an teneffüstedir. Derse kalan: ${minutesToNextClass} dakika` : 'Teneffüs';
    } else if (currentSlot.type === 'lunch') {
      timerText = minutesToNextClass !== null ? `Okulumuz şu an öğle arasındadır, derse kalan: ${minutesToNextClass} dakika` : 'Öğle arası';
    }
  }

  return <Text style={styles.text}>{timerText}</Text>;
};

export default SchoolStatusText;

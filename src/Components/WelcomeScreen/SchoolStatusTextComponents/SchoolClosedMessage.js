import { isWeekend } from '../../../utils/schedule';
import TimeCalculator from './TimeCalculator';

const SchoolClosedMessage = {
  getMessage: (now) => {
    if (isWeekend(now)) {
      return 'Okulumuz hafta sonu kapalıdır.';
    }

    const currentHour = now.getHours();
    
    if (currentHour < 9) {
      const { hours, minutes } = TimeCalculator.getTimeUntilSchoolOpens(now);
      return `Okulun açılmasına: ${hours} saat ${minutes} dakika kaldı.`;
    }
    
    return 'Okulumuz bugün için kapandı.';
  }
};

export default SchoolClosedMessage;
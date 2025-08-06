import { isWeekend } from '../../../utils/schedule';
import TimeCalculator from './TimeCalculator';

const SchoolClosedMessage = {
  getMessage: (now) => {
    if (isWeekend(now)) {
      return t('okulumuz_hafta_sonu_kapalidir');
    }

    const currentHour = now.getHours();
    
    if (currentHour < 9) {
      const { hours, minutes } = TimeCalculator.getTimeUntilSchoolOpens(now);
      return `Okulun açılmasına: ${hours} saat ${minutes} dakika kaldı.`;
    }
    
    return t('okulumuz_bugun_icin_kapandi');
  }
};

export default SchoolClosedMessage;
import { isWeekend } from '../../../utils/schedule';
import TimeCalculator from './TimeCalculator';
import i18n from '../../../i18n';

const SchoolClosedMessage = {
  getMessage: (now) => {
    if (isWeekend(now)) {
      return i18n.t('okulumuz_hafta_sonu_kapalidir');
    }

    const currentHour = now.getHours();
    
    if (currentHour < 9) {
      const { hours, minutes } = TimeCalculator.getTimeUntilSchoolOpens(now);
      return i18n.t('okulun_acilmasina_saat_dakika', { hours, minutes });
    }
    
    return i18n.t('okulumuz_bugun_icin_kapandi');
  }
};

export default SchoolClosedMessage;
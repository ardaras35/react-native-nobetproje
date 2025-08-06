import i18n from '../../../i18n';

const SchoolOpenMessage = {
  getMessage: (currentSlot, minutesToNextClass, minutesToNextBreak) => {
    if (!currentSlot) {
      return minutesToNextClass !== null
        ? i18n.t('derse_baslamak_icin_dakika_kaldi', { minutes: minutesToNextClass })
        : i18n.t('ders_programi_yukleniyor');
    }

    switch (currentSlot.type) {
      case 'class':
        return minutesToNextBreak !== null
          ? i18n.t('su_an_ders_var_teneffuse_dakika', { minutes: minutesToNextBreak })
          : i18n.t('su_an_ders_devam_ediyor');

      case 'break':
        return minutesToNextClass !== null
          ? i18n.t('su_an_teneffus_derse_dakika', { minutes: minutesToNextClass })
          : i18n.t('su_an_teneffus_zamani');

      case 'lunch':
        return minutesToNextClass !== null
          ? i18n.t('su_an_ogle_arasi_derse_dakika', { minutes: minutesToNextClass })
          : i18n.t('su_an_ogle_arasi');

      default:
        return i18n.t('bilinmeyen_durum');
    }
  }
};

export default SchoolOpenMessage;
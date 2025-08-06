const SchoolOpenMessage = {
  getMessage: (currentSlot, minutesToNextClass, minutesToNextBreak) => {
    if (!currentSlot) {
      return minutesToNextClass !== null
        ? `Derse başlamak için: ${minutesToNextClass} dakika kaldı.`
        : t('ders_programi_yukleniyor');
    }

    switch (currentSlot.type) {
      case 'class':
        return minutesToNextBreak !== null
          ? `Şu an ders var. Teneffüse: ${minutesToNextBreak} dakika kaldı.`
          : t('su_an_ders_devam_ediyor');

      case 'break':
        return minutesToNextClass !== null
          ? `Şu an teneffüs. Derse: ${minutesToNextClass} dakika kaldı.`
          : t('su_an_teneffus_zamani');

      case 'lunch':
        return minutesToNextClass !== null
          ? `Şu an öğle arası. Derse: ${minutesToNextClass} dakika kaldı.`
          : t('su_an_ogle_arasi');

      default:
        return 'Bilinmeyen durum.';
    }
  }
};

export default SchoolOpenMessage;
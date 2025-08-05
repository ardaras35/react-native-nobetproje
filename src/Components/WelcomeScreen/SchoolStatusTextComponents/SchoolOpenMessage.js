const SchoolOpenMessage = {
  getMessage: (currentSlot, minutesToNextClass, minutesToNextBreak) => {
    if (!currentSlot) {
      return minutesToNextClass !== null
        ? `Derse başlamak için: ${minutesToNextClass} dakika kaldı.`
        : 'Ders programı yükleniyor...';
    }

    switch (currentSlot.type) {
      case 'class':
        return minutesToNextBreak !== null
          ? `Şu an ders var. Teneffüse: ${minutesToNextBreak} dakika kaldı.`
          : 'Şu an ders devam ediyor.';

      case 'break':
        return minutesToNextClass !== null
          ? `Şu an teneffüs. Derse: ${minutesToNextClass} dakika kaldı.`
          : 'Şu an teneffüs zamanı.';

      case 'lunch':
        return minutesToNextClass !== null
          ? `Şu an öğle arası. Derse: ${minutesToNextClass} dakika kaldı.`
          : 'Şu an öğle arası.';

      default:
        return 'Bilinmeyen durum.';
    }
  }
};

export default SchoolOpenMessage;
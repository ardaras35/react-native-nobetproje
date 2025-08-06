import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      "35inch_nobetcim_uygulamasina_h": "35Inch NöbetçiM Uygulamasına Hoşgeldiniz",
      "veli_girisi": "Veli Girişi",
      "yonetici_girisi": "Yönetici Girişi",
      "ogretmenlerimiz": "Öğretmenlerimiz",
      "ogretmen_ekle": "Öğretmen Ekle",
      "_yeni_ogretmen_ekle": "👨‍🏫 Yeni Öğretmen Ekle",
      "ogretmen_adi_": "Öğretmen Adı *",
      "brans_": "Branş *",
      "brans_yuklenecek": "Branş yüklenecek...",
      "baslangic_durumu": "Başlangıç Durumu",
      "ogretmen_bulunamadi": "Öğretmen bulunamadı",
      "arama_kriterlerini_degistirin_": "Arama kriterlerini değiştirin veya yeni öğretmen ekleyin",
      "kat_dagilimi": "Kat Dağılımı",
      "derste_veya_izinli_ogretmenler": "Derste veya izinli öğretmenler kat değiştiremez.",
      "istatistikler_gercek_zamanli_g": "İstatistikler gerçek zamanlı güncellenir.",
      "hizli_bilgiler": "Hızlı Bilgiler",
      "nobetci": "Nöbetçi",
      "durum_dagilimi": "Durum Dağılımı",
      "ogretmeni_sil": "Öğretmeni Sil",
      "kat_atamasi": "Kat Ataması",
      "atanmadi": "Atanmadı",
      "durum_guncelle": "Durum Güncelle",
      "sifre": "Şifre",
      "giris_yap": "Giriş Yap",
      "geri_don": "Geri Dön",
      "durum_degistir": "Durum Değiştir",
      "uyari": "Uyarı",
      "telefon_numarasi_bulunamadi": "Telefon numarası bulunamadı.",
      "atanmamis": "Atanmamış",
      "okulumuz_hafta_sonu_kapalidir": "Okulumuz hafta sonu kapalıdır.",
      "okulumuz_henuz_acilmadi": "Okulumuz henüz açılmadı.",
      "okulumuz_kapalidir": "Okulumuz kapalıdır.",
      "ders_programi_yukleniyor": "Ders programı yükleniyor...",
      "teneffus_zamani": "Teneffüs zamanı.",
      "ogle_arasi": "Öğle arası.",
      "ogretmen_bilgisi": "Öğretmen Bilgisi",
      "nobetci_ogretmenlerin_bilgiler": "Nöbetçi öğretmenlerin bilgilerini görmek için lütfen giriş yapınız.",
      "ogrencinin_adi_soyadi": "Öğrencinin Adı Soyadı",
      "ogrenci_numarasi": "Öğrenci Numarası",
      "okulumuz_bugun_icin_kapandi": "Okulumuz bugün için kapandı.",
      "su_an_ders_devam_ediyor": "Şu an ders devam ediyor.",
      "su_an_teneffus_zamani": "Şu an teneffüs zamanı.",
      "su_an_ogle_arasi": "Şu an öğle arası.",
      "tumu": "Tümü",
      "veri_yuklenemedi": "Veri yüklenemedi.",
      "hata_olustu": "Hata oluştu!",
      "lutfen_girdiginiz_bilgileri_ko": "Lütfen girdiğiniz bilgileri kontrol edin.",
      "hatali_giris": "Hatalı Giriş",
      "girdiginiz_bilgide_kayit_bulun": "Girdiğiniz bilgide kayıt bulunamadı."
    }
  },
  en: {
    translation: {
      "35inch_nobetcim_uygulamasina_h": "Welcome to 35Inch Guard App",
      "veli_girisi": "Parent Login",
      "yonetici_girisi": "Admin Login",
      "ogretmenlerimiz": "Our Teachers",
      "ogretmen_ekle": "Add Teacher",
      "_yeni_ogretmen_ekle": "👨‍🏫 Add New Teacher",
      "ogretmen_adi_": "Teacher Name *",
      "brans_": "Subject *",
      "brans_yuklenecek": "Subject will be loaded...",
      "baslangic_durumu": "Initial Status",
      "ogretmen_bulunamadi": "Teacher not found",
      "arama_kriterlerini_degistirin_": "Change search criteria or add new teacher",
      "kat_dagilimi": "Floor Distribution",
      "derste_veya_izinli_ogretmenler": "Teachers who are in class or on leave cannot change floors.",
      "istatistikler_gercek_zamanli_g": "Statistics are updated in real time.",
      "hizli_bilgiler": "Quick Info",
      "nobetci": "On Duty",
      "durum_dagilimi": "Status Distribution",
      "ogretmeni_sil": "Delete Teacher",
      "kat_atamasi": "Floor Assignment",
      "atanmadi": "Not Assigned",
      "durum_guncelle": "Update Status",
      "sifre": "Password",
      "giris_yap": "Login",
      "geri_don": "Go Back",
      "durum_degistir": "Change Status",
      "uyari": "Warning",
      "telefon_numarasi_bulunamadi": "Phone number not found.",
      "atanmamis": "Unassigned",
      "okulumuz_hafta_sonu_kapalidir": "Our school is closed on weekends.",
      "okulumuz_henuz_acilmadi": "Our school has not yet opened.",
      "okulumuz_kapalidir": "Our school is closed.",
      "ders_programi_yukleniyor": "Loading curriculum...",
      "teneffus_zamani": "Recess time.",
      "ogle_arasi": "Lunch break.",
      "ogretmen_bilgisi": "Teacher Information",
      "nobetci_ogretmenlerin_bilgiler": "Please log in to see the information of the teachers on duty.",
      "ogrencinin_adi_soyadi": "Student's Name and Surname",
      "ogrenci_numarasi": "Student Number",
      "okulumuz_bugun_icin_kapandi": "Our school is closed for today.",
      "su_an_ders_devam_ediyor": "Class is currently in session.",
      "su_an_teneffus_zamani": "It's recess time now.",
      "su_an_ogle_arasi": "It's lunch break now.",
      "tumu": "All",
      "veri_yuklenemedi": "Data could not be loaded.",
      "hata_olustu": "An error occurred!",
      "lutfen_girdiginiz_bilgileri_ko": "Please check the information you entered.",
      "hatali_giris": "Invalid Login",
      "girdiginiz_bilgide_kayit_bulun": "No record found with the information you entered."
    }
  }
};

console.log('Resources loaded:', Object.keys(resources));

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr',
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
  });

console.log('i18n initialized, current language:', i18n.language);

export default i18n;
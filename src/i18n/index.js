// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      // Ana Sayfa
      "35inch_nobetcim_uygulamasina_h": "35Inch NöbetçiM Uygulamasına Hoşgeldiniz",
      "veli_girisi": "Veli Girişi",
      "yonetici_girisi": "Yönetici Girişi",
      "ogretmenlerimiz": "Öğretmenlerimiz",

      // Öğretmen İşlemleri
      "ogretmen_ekle": "Öğretmen Ekle",
      "_yeni_ogretmen_ekle": "👨‍🏫 Yeni Öğretmen Ekle",
      "ogretmen_adi_": "Öğretmen Adı *",
      "ogretmen_bilgisi": "Öğretmen Bilgisi",
      "ogretmen_bulunamadi": "Öğretmen bulunamadı",
      "ogretmeni_sil": "Öğretmeni Sil",
      "ogretmen_sil": "Öğretmen Sil",
      "ogretmen_adini_girin": "Öğretmen adını girin",

      // Branş ve Ders (branş adları için TR/EN çapraz anahtarlar)
      "brans_": "Branş *",
      "brans_yuklenecek": "Branş yüklenecek...",
      "baslangic_durumu": "Başlangıç Durumu",

      // <- BRANŞ İSİMLERİ (Hem TR hem EN anahtarlarını ekledik)
      "Matematik": "Matematik",
      "Mathematics": "Matematik",
      "Fizik": "Fizik",
      "Physics": "Fizik",
      "Kimya": "Kimya",
      "Chemistry": "Kimya",
      "Edebiyat": "Edebiyat",
      "Literature": "Edebiyat",
      "İngilizce": "İngilizce",
      "English": "İngilizce",
      "Din Kültürü": "Din Kültürü",
      "Religious Culture": "Din Kültürü",

      "ders_programi_yukleniyor": "Ders programı yükleniyor...",
      "su_an_ders_devam_ediyor": "Şu an ders devam ediyor.",

      // Durum İşlemleri
      "nobetci": "Nöbetçi",
      "durum_dagilimi": "Durum Dağılımı",
      "durum_guncelle": "Durum Güncelle",
      "durum_degistir": "Durum Değiştir",
      "atanmadi": "Atanmadı",
      "atanmamis": "Atanmamış",
      "derste": "Derste",
      "izinli": "İzinli",

      // Kat İşlemleri
      "kat_dagilimi": "Kat Dağılımı",
      "kat_atamasi": "Kat Ataması",
      "derste_veya_izinli_ogretmenler": "Derste veya izinli öğretmenler kat değiştiremez.",
      "kat": "Kat",
      "kat_ata": "Kat Ata",
      "kat_yok": "Kat Yok",
      "1_kat": "1. Kat",
      "2_kat": "2. Kat",
      "3_kat": "3. Kat",
      "4_kat": "4. Kat",
      "5_kat": "5. Kat",

      // Zaman ve Okul Durumu
      "okulumuz_hafta_sonu_kapalidir": "Okulumuz hafta sonu kapalıdır.",
      "okulumuz_henuz_acilmadi": "Okulumuz henüz açılmadı.",
      "okulumuz_kapalidir": "Okulumuz kapalıdır.",
      "okulumuz_bugun_icin_kapandi": "Okulumuz bugün için kapandı.",
      "teneffus_zamani": "Teneffüs zamanı.",
      "su_an_teneffus_zamani": "Şu an teneffüs zamanı.",
      "ogle_arasi": "Öğle arası.",
      "su_an_ogle_arasi": "Şu an öğle arası.",
      "bilinmeyen_durum": "Bilinmeyen durum",
      "okulun_acilmasina_saat_dakika": "Okulun açılmasına: {{hours}} saat {{minutes}} dakika kaldı.",
      "su_an_ders_var_teneffuse_dakika": "Şu an ders var. Teneffüse: {{minutes}} dakika kaldı.",
      "su_an_teneffus_derse_dakika": "Şu an teneffüs. Derse: {{minutes}} dakika kaldı.",
      "su_an_ogle_arasi_derse_dakika": "Şu an öğle arası. Derse: {{minutes}} dakika kaldı.",

      // Giriş ve Kimlik Doğrulama
      "sifre": "Şifre",
      "giris_yap": "Giriş Yap",
      "geri_don": "Geri Dön",
      "hatali_giris": "Hatalı Giriş",
      "girdiginiz_bilgide_kayit_bulun": "Girdiğiniz bilgide kayıt bulunamadı.",
      "lutfen_girdiginiz_bilgileri_ko": "Lütfen girdiğiniz bilgileri kontrol edin.",
      "ad_soyad": "Ad Soyad",
      "hosgeldiniz": "Hoşgeldiniz",
      "doruk_aras_placeholder": "Doruk Aras",
      "123456_placeholder": "123456",

      // Veli ve Öğrenci
      "nobetci_ogretmenlerin_bilgiler": "Nöbetçi öğretmenlerin bilgilerini görmek için lütfen giriş yapınız.",
      "ogrencinin_adi_soyadi": "Öğrencinin Adı Soyadı",
      "ogrenci_numarasi": "Öğrenci Numarası",
      "arda_aras_placeholder": "Arda Aras",
      "1234_placeholder": "1234",

      // İstatistik ve Bilgi
      "istatistikler_gercek_zamanli_g": "İstatistikler gerçek zamanlı güncellenir.",
      "hizli_bilgiler": "Hızlı Bilgiler",
      "arama_kriterlerini_degistirin_": "Arama kriterlerini değiştirin veya yeni öğretmen ekleyin",
      "genel_durum": "Genel Durum",
      "toplam": "Toplam",
      "ogretmen": "Öğretmen",
      "ogretmen_gosteriliyor": "öğretmen gösteriliyor",
      "istatistikler": "📊 İstatistikler",

      // Genel
      "tumu": "Tümü",
      "uyari": "Uyarı",
      "telefon_numarasi_bulunamadi": "Telefon numarası bulunamadı.",
      "veri_yuklenemedi": "Veri yüklenemedi.",
      "hata_olustu": "Hata oluştu!",
      "telefon": "Telefon",
      "durum": "Durum",
      "bos_alan": "---",

      // Butonlar ve Aksiyonlar
      "kaydet": "Kaydet",
      "ara": "Ara",
      "kapat": "Kapat",
      "sil": "Sil",
      "iptal": "İptal",
      "tamam": "Tamam",
      "yeni_ekle": "Yeni Ekle",
      "ogretmen_ara": "Öğretmen ara...",
      "kaydedildi": "Kaydedildi!",
      "eksik_bilgi": "Eksik Bilgi",

      // Sayfa başlıkları
      "kat_bilgisi": "Kat Bilgisi",
      "admin_panel": "Admin Panel",

      // Onay mesajları
      "emin_misiniz": "Emin misiniz?",
      "devam_etmek_istiyor_musunuz": "Devam etmek istiyor musunuz?",
      "ogretmeni_silmek_istediginizden_emin": "{{name}} adlı öğretmeni silmek istediğinizden emin misiniz?",
      "durum_olan_ogretmeni_aramak": "{{durum}} olan bir öğretmeni aramak üzeresiniz. Devam etmek istiyor musunuz?",
      "bilinmeyen_durumda": "Bilinmeyen durumda",

      // Zaman ifadeleri
      "derse_baslamak_icin_dakika_kaldi": "Derse başlamak için {{minutes}} dakika kaldı.",
      "teneffuse_dakika_kaldi": "Teneffüse {{minutes}} dakika kaldı.",
      "derse_dakika_kaldi": "Derse {{minutes}} dakika kaldı.",
      "ogle_arasi_derse_dakika_kaldi": "Öğle arasındadır, derse {{minutes}} dakika kaldı.",

      // Ek bilgiler
      "her_katta_maksimum_2_ogretmen": "Her katta maksimum 2 öğretmen olabilir.",

      // Modal ve Alert mesajları
      "ogretmen_silme_onay": "Öğretmen Sil",
      "ara_onay": "Ara"
    }
  },
  en: {
    translation: {
      // Main Page
      "35inch_nobetcim_uygulamasina_h": "Welcome to 35Inch Guard App",
      "veli_girisi": "Parent Login",
      "yonetici_girisi": "Admin Login",
      "ogretmenlerimiz": "Our Teachers",

      // Teacher Operations
      "ogretmen_ekle": "Add Teacher",
      "_yeni_ogretmen_ekle": "👨‍🏫 Add New Teacher",
      "ogretmen_adi_": "Teacher Name *",
      "ogretmen_bilgisi": "Teacher Information",
      "ogretmen_bulunamadi": "Teacher not found",
      "ogretmeni_sil": "Delete Teacher",
      "ogretmen_sil": "Delete Teacher",
      "ogretmen_adini_girin": "Enter teacher name",

      // Subject and Lesson (branch names, cross-mapped)
      "brans_": "Subject *",
      "brans_yuklenecek": "Subject will be loaded...",
      "baslangic_durumu": "Initial Status",

      // <- BRANCH NAMES
      "Matematik": "Mathematics",
      "Mathematics": "Mathematics",
      "Fizik": "Physics",
      "Physics": "Physics",
      "Kimya": "Chemistry",
      "Chemistry": "Chemistry",
      "Edebiyat": "Literature",
      "Literature": "Literature",
      "İngilizce": "English",
      "English": "English",
      "Din Kültürü": "Religious Culture",
      "Religious Culture": "Religious Culture",

      "ders_programi_yukleniyor": "Loading curriculum...",
      "su_an_ders_devam_ediyor": "Class is currently in session.",

      // Status Operations
      "nobetci": "On Duty",
      "durum_dagilimi": "Status Distribution",
      "durum_guncelle": "Update Status",
      "durum_degistir": "Change Status",
      "atanmadi": "Not Assigned",
      "atanmamis": "Unassigned",
      "derste": "In Class",
      "izinli": "On Leave",

      // Floor Operations
      "kat_dagilimi": "Floor Distribution",
      "kat_atamasi": "Floor Assignment",
      "derste_veya_izinli_ogretmenler": "Teachers who are in class or on leave cannot change floors.",
      "kat": "Floor",
      "kat_ata": "Assign Floor",
      "kat_yok": "No Floor",
      "1_kat": "1st Floor",
      "2_kat": "2nd Floor",
      "3_kat": "3rd Floor",
      "4_kat": "4th Floor",
      "5_kat": "5th Floor",

      // Time and School Status
      "okulumuz_hafta_sonu_kapalidir": "Our school is closed on weekends.",
      "okulumuz_henuz_acilmadi": "Our school has not yet opened.",
      "okulumuz_kapalidir": "Our school is closed.",
      "okulumuz_bugun_icin_kapandi": "Our school is closed for today.",
      "teneffus_zamani": "Recess time.",
      "su_an_teneffus_zamani": "It's recess time now.",
      "ogle_arasi": "Lunch break.",
      "su_an_ogle_arasi": "It's lunch break now.",
      "bilinmeyen_durum": "Unknown status",
      "okulun_acilmasina_saat_dakika": "School opens in: {{hours}} hours {{minutes}} minutes.",
      "su_an_ders_var_teneffuse_dakika": "Class is in session. Recess in: {{minutes}} minutes.",
      "su_an_teneffus_derse_dakika": "It's recess now. Class in: {{minutes}} minutes.",
      "su_an_ogle_arasi_derse_dakika": "It's lunch break. Class in: {{minutes}} minutes.",

      // Login and Authentication
      "sifre": "Password",
      "giris_yap": "Login",
      "geri_don": "Go Back",
      "hatali_giris": "Invalid Login",
      "girdiginiz_bilgide_kayit_bulun": "No record found with the information you entered.",
      "lutfen_girdiginiz_bilgileri_ko": "Please check the information you entered.",
      "ad_soyad": "Name Surname",
      "hosgeldiniz": "Welcome",
      "doruk_aras_placeholder": "John Doe",
      "123456_placeholder": "123456",

      // Parent and Student
      "nobetci_ogretmenlerin_bilgiler": "Please log in to see the information of the teachers on duty.",
      "ogrencinin_adi_soyadi": "Student's Name and Surname",
      "ogrenci_numarasi": "Student Number",
      "arda_aras_placeholder": "John Smith",
      "1234_placeholder": "1234",

      // Statistics and Information
      "istatistikler_gercek_zamanli_g": "Statistics are updated in real time.",
      "hizli_bilgiler": "Quick Info",
      "arama_kriterlerini_degistirin_": "Change search criteria or add new teacher",
      "genel_durum": "General Status",
      "toplam": "Total",
      "ogretmen": "Teacher",
      "ogretmen_gosteriliyor": "teachers showing",
      "istatistikler": "📊 Statistics",

      // General
      "tumu": "All",
      "uyari": "Warning",
      "telefon_numarasi_bulunamadi": "Phone number not found.",
      "veri_yuklenemedi": "Data could not be loaded.",
      "hata_olustu": "An error occurred!",
      "telefon": "Phone",
      "durum": "Status",
      "bos_alan": "---",

      // Buttons and Actions
      "kaydet": "Save",
      "ara": "Search",
      "kapat": "Close",
      "sil": "Delete",
      "iptal": "Cancel",
      "tamam": "OK",
      "yeni_ekle": "Add New",
      "ogretmen_ara": "Search teacher...",
      "kaydedildi": "Saved!",
      "eksik_bilgi": "Missing Information",

      // Date and Time
      "tarih": "Date",

      // Page titles
      "kat_bilgisi": "Floor Information",
      "admin_panel": "Admin Panel",

      // Confirmation messages
      "emin_misiniz": "Are you sure?",
      "devam_etmek_istiyor_musunuz": "Do you want to continue?",
      "ogretmeni_silmek_istediginizden_emin": "Are you sure you want to delete teacher {{name}}?",
      "durum_olan_ogretmeni_aramak": "You are about to call a teacher who is {{durum}}. Do you want to continue?",
      "bilinmeyen_durumda": "in unknown status",

      // Time expressions (with interpolation)
      "derse_baslamak_icin_dakika_kaldi": "{{minutes}} minutes left to start class.",
      "teneffuse_dakika_kaldi": "{{minutes}} minutes left to recess.",
      "derse_dakika_kaldi": "{{minutes}} minutes left to class.",
      "ogle_arasi_derse_dakika_kaldi": "It's lunch break, {{minutes}} minutes left to class.",

      // Additional information
      "her_katta_maksimum_2_ogretmen": "Maximum 2 teachers per floor.",

      // Modal and Alert messages
      "ogretmen_silme_onay": "Delete Teacher",
      "ara_onay": "Call"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr', // Default language
    fallbackLng: 'tr',
    interpolation: { escapeValue: false },
    debug: false,
  });

export default i18n;

// scripts/convertToI18n.js
const fs = require('fs');
const path = require('path');

// Çeviri key'leri (elimizdeki çevirilerden)
const textToKeyMap = {
  "Öğretmen Ekle": "ogretmen_ekle",
  "👨‍🏫 Yeni Öğretmen Ekle": "_yeni_ogretmen_ekle",
  "Öğretmen Adı *": "ogretmen_adi_",
  "Branş *": "brans_",
  "Branş yüklenecek...": "brans_yuklenecek",
  "Başlangıç Durumu": "baslangic_durumu",
  "Öğretmen bulunamadı": "ogretmen_bulunamadi",
  "Arama kriterlerini değiştirin veya yeni öğretmen ekleyin": "arama_kriterlerini_degistirin_",
  "Kat Dağılımı": "kat_dagilimi",
  "Derste veya izinli öğretmenler kat değiştiremez.": "derste_veya_izinli_ogretmenler",
  "İstatistikler gerçek zamanlı güncellenir.": "istatistikler_gercek_zamanli_g",
  "Hızlı Bilgiler": "hizli_bilgiler",
  "Nöbetçi": "nobetci",
  "Durum Dağılımı": "durum_dagilimi",
  "Öğretmeni Sil": "ogretmeni_sil",
  "Kat Ataması": "kat_atamasi",
  "Atanmadı": "atanmadi",
  "Durum Güncelle": "durum_guncelle",
  "Şifre": "sifre",
  "Giriş Yap": "giris_yap",
  "Geri Dön": "geri_don",
  "Durum Değiştir": "durum_degistir",
  "Uyarı": "uyari",
  "Telefon numarası bulunamadı.": "telefon_numarasi_bulunamadi",
  "Atanmamış": "atanmamis",
  "Okulumuz hafta sonu kapalıdır.": "okulumuz_hafta_sonu_kapalidir",
  "Okulumuz henüz açılmadı.": "okulumuz_henuz_acilmadi",
  "Okulumuz kapalıdır.": "okulumuz_kapalidir",
  "Ders programı yükleniyor...": "ders_programi_yukleniyor",
  "Teneffüs zamanı.": "teneffus_zamani",
  "Öğle arası.": "ogle_arasi",
  "Öğretmen Bilgisi": "ogretmen_bilgisi",
  "Nöbetçi öğretmenlerin bilgilerini görmek için lütfen giriş yapınız.": "nobetci_ogretmenlerin_bilgiler",
  "Öğrencinin Adı Soyadı": "ogrencinin_adi_soyadi",
  "Öğrenci Numarası": "ogrenci_numarasi",
  "Öğretmenlerimiz": "ogretmenlerimiz",
  "Veli Girişi": "veli_girisi",
  "Yönetici Girişi": "yonetici_girisi",
  "Okulumuz bugün için kapandı.": "okulumuz_bugun_icin_kapandi",
  "Şu an ders devam ediyor.": "su_an_ders_devam_ediyor",
  "Şu an teneffüs zamanı.": "su_an_teneffus_zamani",
  "Şu an öğle arası.": "su_an_ogle_arasi",
  "Tümü": "tumu",
  "Veri yüklenemedi.": "veri_yuklenemedi",
  "Hata oluştu!": "hata_olustu",
  "Lütfen girdiğiniz bilgileri kontrol edin.": "lutfen_girdiginiz_bilgileri_ko",
  "Hatalı Giriş": "hatali_giris",
  "Girdiğiniz bilgide kayıt bulunamadı.": "girdiginiz_bilgide_kayit_bulun",
  "35Inch NöbetçiM Uygulamasına Hoşgeldiniz": "35inch_nobetcim_uygulamasina_h"
};

class I18nConverter {
  convertFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // useTranslation import'u ekle
    if (!content.includes('useTranslation') && content.includes('react')) {
      const importIndex = content.indexOf("import");
      if (importIndex !== -1) {
        const lines = content.split('\n');
        const importLine = "import { useTranslation } from 'react-i18next';";
        
        // React import'undan sonra ekle
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes("import") && lines[i].includes("react")) {
            lines.splice(i + 1, 0, importLine);
            break;
          }
        }
        content = lines.join('\n');
        hasChanges = true;
      }
    }

    // Component'e { t } ekle
    if (!content.includes('const { t }') && content.includes('= () => {')) {
      content = content.replace(
        /const (\w+) = \(\) => \{/,
        `const $1 = () => {\n  const { t } = useTranslation();`
      );
      hasChanges = true;
    }

    // Metinleri değiştir
    Object.entries(textToKeyMap).forEach(([text, key]) => {
      // String içindeki metinler
      const stringPattern = new RegExp(`(['"\`])${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\1`, 'g');
      if (content.match(stringPattern)) {
        content = content.replace(stringPattern, `{t('${key}')}`);
        hasChanges = true;
        console.log(`✅ "${text}" -> {t('${key}')} in ${filePath}`);
      }

      // JSX içindeki metinler
      const jsxPattern = new RegExp(`>${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<`, 'g');
      if (content.match(jsxPattern)) {
        content = content.replace(jsxPattern, `>{t('${key}')}<`);
        hasChanges = true;
        console.log(`✅ JSX: "${text}" -> {t('${key}')} in ${filePath}`);
      }
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      console.log(`📝 ${filePath} güncellendi`);
      return true;
    }
    return false;
  }

  processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    let totalChanges = 0;

    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        totalChanges += this.processDirectory(fullPath);
      } else if (file.match(/\.(js|jsx|ts|tsx)$/) && !file.includes('WelcomeScreen')) {

        if (this.convertFile(fullPath)) {
          totalChanges++;
        }
      }
    });

    return totalChanges;
  }

  run() {
    console.log('🚀 Tüm dosyalar i18n formatına dönüştürülüyor...\n');
    
    const changes = this.processDirectory('./src');
    
    console.log(`\n✅ ${changes} dosya güncellendi!`);
    console.log('🎉 Tüm proje çok dilli hale getirildi!');
  }
}

const converter = new I18nConverter();
converter.run();
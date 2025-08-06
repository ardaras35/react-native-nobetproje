// scripts/translateTexts.js
const fs = require('fs');

class TextTranslator {
  constructor() {
    this.translations = {
      tr: {},
      en: {}
    };
    this.keyMapping = {};
  }

  // MyMemory API ile çeviri
  async translateText(text, from = 'tr', to = 'en') {
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
      
      console.log(`🔄 Çeviriliyor: "${text}"`);
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.responseStatus === 200) {
        const translated = data.responseData.translatedText;
        console.log(`✅ Çevirildi: "${text}" -> "${translated}"`);
        return translated;
      } else {
        console.log(`❌ Çeviri başarısız: ${data.responseStatus}`);
        return text; // Hata durumunda orijinal metni döndür
      }
    } catch (error) {
      console.log(`❌ API Hatası: ${error.message}`);
      return text; // Hata durumunda orijinal metni döndür
    }
  }

  // Key oluştur (metin -> anahtar)
  createKey(text, index) {
    // Metinden key oluştur (temiz, snake_case)
    let key = text
      .toLowerCase()
      .replace(/[çğıöşü]/g, (match) => {
        const map = { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u' };
        return map[match];
      })
      .replace(/[^a-z0-9\s]/g, '') // Özel karakterleri kaldır
      .replace(/\s+/g, '_') // Boşlukları _ ile değiştir
      .substring(0, 30); // Maksimum 30 karakter
    
    // Eğer key çok kısa ise index ekle
    if (key.length < 3) {
      key = `text_${index}`;
    }
    
    // Key'in tekrar etmemesini sağla
    let finalKey = key;
    let counter = 1;
    while (Object.values(this.keyMapping).includes(finalKey)) {
      finalKey = `${key}_${counter}`;
      counter++;
    }
    
    return finalKey;
  }

  // Tüm metinleri çevir
  async translateAll() {
    // Geçerli metinleri oku
    const validTexts = JSON.parse(fs.readFileSync('./translations/valid_texts.json', 'utf8'));
    
    console.log(`🚀 ${validTexts.length} metin çevrilmeye başlanıyor...\n`);
    
    for (let i = 0; i < validTexts.length; i++) {
      const text = validTexts[i];
      const key = this.createKey(text, i);
      
      // Çeviri yap
      const translatedText = await this.translateText(text);
      
      // Kaydet
      this.translations.tr[key] = text;
      this.translations.en[key] = translatedText;
      this.keyMapping[text] = key;
      
      console.log(`📝 Key: "${key}"\n`);
      
      // Rate limit için bekle (MyMemory günlük 1000 istek limiti var)
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 saniye bekle
      
      // İlerleme göster
      console.log(`⏳ İlerleme: ${i + 1}/${validTexts.length}\n`);
    }
    
    console.log('🎉 Tüm çeviriler tamamlandı!');
  }

  // Dosyaları kaydet
  saveFiles() {
    // Ana çeviri dosyası
    fs.writeFileSync(
      './translations/translations.json',
      JSON.stringify(this.translations, null, 2),
      'utf8'
    );
    
    // Key mapping (hangi metin hangi key'e karşılık geliyor)
    fs.writeFileSync(
      './translations/key_mapping.json',
      JSON.stringify(this.keyMapping, null, 2),
      'utf8'
    );
    
    console.log('\n💾 Dosyalar kaydedildi:');
    console.log('- translations/translations.json');
    console.log('- translations/key_mapping.json');
  }

  async run() {
    try {
      await this.translateAll();
      this.saveFiles();
      
      console.log('\n✅ İşlem başarıyla tamamlandı!');
      console.log(`📊 ${Object.keys(this.translations.tr).length} metin çevirildi`);
      
    } catch (error) {
      console.error('❌ Hata oluştu:', error);
    }
  }
}

// Node.js ortamında fetch için
if (typeof fetch === 'undefined') {
  global.fetch = require('node-fetch');
}

// Çalıştır
const translator = new TextTranslator();
translator.run();
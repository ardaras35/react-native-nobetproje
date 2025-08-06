// scripts/smartFilter.js
const fs = require('fs');

class SmartTextFilter {
  constructor() {
    this.validTexts = [];
    this.invalidTexts = [];
  }

  isValidText(text) {
    // Temizle
    text = text.trim();
    
    // Çok kısa veya çok uzun
    if (text.length < 2 || text.length > 100) return false;
    
    // Import/export/kod satırları
    if (text.includes('import') || text.includes('export') || text.includes('require')) return false;
    if (text.includes('from') && text.includes("'")) return false;
    if (text.includes(';') || text.includes('\r\n')) return false;
    if (text.includes('useState') || text.includes('useEffect')) return false;
    if (text.includes('console.') || text.includes('alert')) return false;
    
    // JSX/kod parçaları
    if (text.includes('{') && text.includes('}')) return false;
    if (text.includes('() =>') || text.includes('function')) return false;
    if (text.includes('.map(') || text.includes('.filter(')) return false;
    if (text.includes('<') && text.includes('>')) return false;
    
    // Style/CSS terimleri
    const styleTerms = ['fontSize', 'marginTop', 'marginBottom', 'paddingHorizontal', 'justifyContent', 'alignItems', 'flexDirection', 'backgroundColor'];
    if (styleTerms.some(term => text.includes(term))) return false;
    
    // Component isimleri (büyük harfle başlayan tek kelime)
    if (/^[A-Z][a-zA-Z]*$/.test(text) && !text.match(/[çğıöşüÇĞIÖŞÜ]/)) return false;
    
    // Sadece İngilizce harfler (Türkçe karakter yoksa muhtemelen kod)
    if (!text.match(/[çğıöşüÇĞIÖŞÜ]/) && text.match(/^[a-zA-Z\s]*$/)) return false;
    
    // Placeholder pattern'lar
    if (text.includes('placeholder =')) return false;
    if (text.includes('name=')) return false;
    
    return true;
  }

  categorizeTexts(texts) {
    console.log('🔍 Metinler akıllı şekilde filtreleniyor...\n');
    
    texts.forEach((text, index) => {
      if (this.isValidText(text)) {
        console.log(`✅ GEÇERLİ: "${text}"`);
        this.validTexts.push(text);
      } else {
        console.log(`❌ GEÇERSİZ: "${text}"`);
        this.invalidTexts.push(text);
      }
    });

    console.log(`\n📊 SONUÇ:`);
    console.log(`✅ Geçerli metinler: ${this.validTexts.length}`);
    console.log(`❌ Geçersiz metinler: ${this.invalidTexts.length}`);
    
    return {
      valid: this.validTexts,
      invalid: this.invalidTexts
    };
  }

  run() {
    // Bulunan metinleri oku
    const foundTexts = JSON.parse(fs.readFileSync('./translations/found_texts.json', 'utf8'));
    
    // Kategorize et
    const result = this.categorizeTexts(foundTexts);
    
    // Geçerli metinleri kaydet
    fs.writeFileSync('./translations/valid_texts.json', JSON.stringify(result.valid, null, 2));
    
    // Geçersiz metinleri de kaydet (kontrol için)
    fs.writeFileSync('./translations/invalid_texts.json', JSON.stringify(result.invalid, null, 2));
    
    console.log('\n💾 Dosyalar kaydedildi:');
    console.log('- translations/valid_texts.json (çevrilecekler)');
    console.log('- translations/invalid_texts.json (çevrilmeyecekler)');
    
    return result.valid;
  }
}

// Çalıştır
const filter = new SmartTextFilter();
const validTexts = filter.run();
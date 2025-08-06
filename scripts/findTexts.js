// scripts/findTexts.js
const fs = require('fs');
const path = require('path');

class TextFinder {
  constructor() {
    this.foundTexts = new Set();
  }

  // Türkçe karakterli metinleri bulur
  findTurkishTexts(content) {
    const patterns = [
      // 'text' veya "text" şeklindeki stringler
      /['"`]([^'"`]*[çğıöşüÇĞIÖŞÜ][^'"`]*)['"`]/g,
      // JSX içindeki metinler: >text
      />([^<]*[çğıöşüÇĞIÖŞÜ][^<]*)</g,
      // Text component: <Text>content</Text>
      /<Text[^>]*>([^<]*[çğıöşüÇĞIÖŞÜ][^<]*)<\/Text>/gi
    ];

    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        let text = match[1].trim();
        // Boşlukları temizle, çok kısa/uzun metinleri filtrele
        if (text.length > 1 && text.length < 100) {
          this.foundTexts.add(text);
        }
      }
    });
  }

  // Tek bir dosyayı tara
  scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      this.findTurkishTexts(content);
      console.log(`✓ Tarandı: ${filePath}`);
    } catch (error) {
      console.log(`❌ Hata: ${filePath}`, error.message);
    }
  }

  // Klasörü tara
  scanDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
      console.log(`❌ Klasör bulunamadı: ${dirPath}`);
      return;
    }

    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Alt klasörleri de tara
        this.scanDirectory(fullPath);
      } else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
        // Sadece JavaScript/TypeScript dosyalarını tara
        this.scanFile(fullPath);
      }
    });
  }

  // Sonuçları göster
  showResults() {
    console.log('\n🔍 BULUNAN TÜRKÇE METİNLER:');
    console.log('==============================');
    
    if (this.foundTexts.size === 0) {
      console.log('❌ Türkçe metin bulunamadı!');
      return [];
    }

    const textsArray = Array.from(this.foundTexts);
    textsArray.forEach((text, index) => {
      console.log(`${index + 1}. "${text}"`);
    });

    console.log(`\n📊 Toplam: ${textsArray.length} farklı metin bulundu`);
    return textsArray;
  }

  // Ana çalıştırma fonksiyonu
  run(srcPath = './src') {
    console.log('🚀 Türkçe metin arama başlatılıyor...\n');
    
    this.scanDirectory(srcPath);
    return this.showResults();
  }
}

// Scripti çalıştır
const finder = new TextFinder();
const foundTexts = finder.run();

// Sonuçları dosyaya kaydet
fs.writeFileSync('./translations/found_texts.json', JSON.stringify(foundTexts, null, 2));
console.log('\n💾 Bulunan metinler "translations/found_texts.json" dosyasına kaydedildi');
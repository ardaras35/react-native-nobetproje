import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next'; // ✅ Ekle
import { getCurrentDateString } from '../utils/schedule';
import useSchedule from '../hooks/useSchedule';
import styles from '../styles/WelcomeScreenStyle';

// Kullanılan component dosyaları çekiliyor.
import Clock from '../Components/WelcomeScreen/Clock';
import StatusIcon from '../Components/WelcomeScreen/StatusIcon';
import SchoolStatusText from '../Components/WelcomeScreen/SchoolStatusText';
import LoginButtons from '../Components/WelcomeScreen/LoginButtons';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation(); // ✅ Ekle
  const todayDate = getCurrentDateString();

  const {
    now,
    currentSlot,
    minutesToNextClass,
    minutesToNextBreak,
    isSchoolOpen,
  } = useSchedule(todayDate);

  // ✅ Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        
        {/* ✅ Dil değiştirme butonu */}
        <TouchableOpacity 
          onPress={toggleLanguage}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            padding: 10,
            backgroundColor: '#007AFF',
            borderRadius: 20,
            zIndex: 1
          }}
        >
          <Text style={{ color: 'white', fontSize: 12 }}>
            {i18n.language === 'tr' ? '🇺🇸 EN' : '🇹🇷 TR'}
          </Text>
        </TouchableOpacity>

        <Clock now={now} />
        <StatusIcon isSchoolOpen={isSchoolOpen} />
        <SchoolStatusText
          now={now}
          isSchoolOpen={isSchoolOpen}
          currentSlot={currentSlot}
          minutesToNextClass={minutesToNextClass}
          minutesToNextBreak={minutesToNextBreak}
        />

        {/* ✅ Çeviri kullan */}
        <Text style={styles.title}>{t('35inch_nobetcim_uygulamasina_h')}</Text>

        <LoginButtons onNavigate={navigation.navigate} />
      </View>
    </SafeAreaView>
  );
}
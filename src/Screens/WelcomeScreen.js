import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getCurrentDateString } from '../utils/schedule';
import useSchedule from '../hooks/useSchedule';
import styles from '../styles/WelcomeScreenStyle';
import { useTranslation } from '../hooks/useTranslation'; // ✅ Ekle

// Kullanılan component dosyaları çekiliyor.
import Clock from '../Components/WelcomeScreen/Clock';
import StatusIcon from '../Components/WelcomeScreen/StatusIcon';
import SchoolStatusText from '../Components/WelcomeScreen/SchoolStatusText';
import LoginButtons from '../Components/WelcomeScreen/LoginButtons';
import LanguageSelector from '../Components/Language/LanguageSelector'; // ✅ Yeni component

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation(); // ✅ Ekle
  const todayDate = getCurrentDateString();

  const {
    now,
    currentSlot,
    minutesToNextClass,
    minutesToNextBreak,
    isSchoolOpen,
  } = useSchedule(todayDate);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* ✅ Dil seçici ekle */}
        <LanguageSelector />
        
        <Clock now={now} />
        <StatusIcon isSchoolOpen={isSchoolOpen} />
        <SchoolStatusText
          now={now}
          isSchoolOpen={isSchoolOpen}
          currentSlot={currentSlot}
          minutesToNextClass={minutesToNextClass}
          minutesToNextBreak={minutesToNextBreak}
        />

        {/* ✅ Çeviri ekle */}
        <Text style={styles.title}>{t('35inch_nobetcim_uygulamasina_h')}</Text>

        <LoginButtons onNavigate={navigation.navigate} />
      </View>
    </SafeAreaView>
  );
}
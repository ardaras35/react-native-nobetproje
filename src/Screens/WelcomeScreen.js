import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getCurrentDateString } from '../utils/schedule';
import useSchedule from '../hooks/useSchedule';
import styles from '../styles/WelcomeScreen.style';

// Kullanılan component dosyaları çekiliyor.
import Clock from '../Components/Clock';
import StatusIcon from '../Components/StatusIcon';
import SchoolStatusText from '../Components/SchoolStatusText';
import LoginButtons from '../Components/LoginButtons';

export default function WelcomeScreen() {
  const navigation = useNavigation();
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
        {/* Ekranın üzerinde canlı saat ve tarih gösteriyor.*/}
        <Clock now={now} />

        {/* Okulumuz açık/kapalı ikonu gösteriyor. */}
        <StatusIcon isSchoolOpen={isSchoolOpen} />

        {/* Derse/Teneffüse kalan süre metnini gösteriyor. */}
        <SchoolStatusText
          now={now}
          isSchoolOpen={isSchoolOpen}
          currentSlot={currentSlot}
          minutesToNextClass={minutesToNextClass}
          minutesToNextBreak={minutesToNextBreak}
        />

        {/* Başlık */}
        <Text style={styles.title}>35Inch NöbetçiM Uygulamasına Hoşgeldiniz</Text>

        {/* Giriş Butonları */}
        <LoginButtons onNavigate={navigation.navigate} />
      </View>
    </SafeAreaView>
  );
}

import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
        <Clock now={now} />
        <StatusIcon isSchoolOpen={isSchoolOpen} />
        <SchoolStatusText
          now={now}
          isSchoolOpen={isSchoolOpen}
          currentSlot={currentSlot}
          minutesToNextClass={minutesToNextClass}
          minutesToNextBreak={minutesToNextBreak}
        />

        <Text style={styles.title}>35Inch NöbetçiM Uygulamasına Hoşgeldiniz</Text>

        <LoginButtons onNavigate={navigation.navigate} />
      </View>
    </SafeAreaView>
  );
}

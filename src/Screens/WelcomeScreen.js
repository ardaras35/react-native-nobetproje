import React from 'react';
import { SafeAreaView, View, Image, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scheduleConfig, getCurrentDateString, utcToIstanbul, isWeekend } from '../utils/schedule';
import useSchedule from '../hooks/useSchedule';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  
  const todayDate = getCurrentDateString();
  const { 
    now, 
    currentSlot, 
    minutesToNextClass, 
    minutesToNextBreak, 
    isSchoolOpen 
  } = useSchedule(todayDate);

  const openIcon = require('../../assets/okulon.png');
  const closedIcon = require('../../assets/okuloff.png');
  const statusIcon = isSchoolOpen ? openIcon : closedIcon;

  let timerText = '';
  
  if (!isSchoolOpen) {

    if (isWeekend(now)) {

      const nextMonday = new Date(now);
      const daysUntilMonday = (1 + 7 - nextMonday.getDay()) % 7 || 7;
      nextMonday.setDate(nextMonday.getDate() + daysUntilMonday);
      nextMonday.setHours(9, 0, 0, 0);
      
      const diffMs = nextMonday.getTime() - now.getTime();
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      
      timerText = `Okulun açılmasına: ${diffHours} sa ${diffMinutes} dk`;
    } else {

      const currentHour = now.getHours();
      
      if (currentHour < 9) {

        const today9AM = new Date(now);
        today9AM.setHours(9, 0, 0, 0);
        
        const diffMs = today9AM.getTime() - now.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        
        timerText = `Okulun açılmasına: ${diffHours} saat ${diffMinutes} dakika kaldı.`;
      } else {

        const tomorrow9AM = new Date(now);
        tomorrow9AM.setDate(tomorrow9AM.getDate() + 1);
        tomorrow9AM.setHours(9, 0, 0, 0);
        

        while (isWeekend(tomorrow9AM)) {
          tomorrow9AM.setDate(tomorrow9AM.getDate() + 1);
        }
        
        const diffMs = tomorrow9AM.getTime() - now.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        
        timerText = `Okulun açılmasına: ${diffHours} saat ${diffMinutes} dakika kaldı.`;
      }
    }
  } else {


    
    if (!currentSlot) {
      timerText = minutesToNextClass !== null ? `Derse başlamak için: ${minutesToNextClass} dk` : 'Ders programı yükleniyor...';
    } else if (currentSlot.type === 'class') {
      timerText = minutesToNextBreak !== null ? `Okulumuz şu an derstedir. Teneffüse kalan: ${minutesToNextBreak} dakika` : 'Ders devam ediyor';
    } else if (currentSlot.type === 'break') {
      timerText = minutesToNextClass !== null ? `Okulumuz şu an teneffüstedir. Derse kalan: ${minutesToNextClass} dakika` : 'Teneffüs';
    } else if (currentSlot.type === 'lunch') {
      timerText = minutesToNextClass !== null ? `Okulumuz şu an öğle arasındadır, derse kalan: ${minutesToNextClass} dakika` : 'Öğle arası';
    }
  }

  const timeDisplay = now.toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const dateDisplay = now.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.timeText}>{timeDisplay}</Text>
        <Text style={styles.dateText}>{dateDisplay}</Text>
        
        <Image source={statusIcon} style={styles.statusIcon} />
        <Text style={styles.altyazi}>{timerText}</Text>
        <Text style={styles.title}>35Inch NöbetçiM Uygulamasına Hoşgeldiniz</Text>

        <Pressable onPress={() => navigation.navigate('ParentsLogin')} style={styles.button}>
          <Text style={styles.buttonText}>Veli Girişi</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('AdminLogin')} style={[styles.button, { marginTop: 12 }]}>
          <Text style={styles.buttonText}>Yönetici Girişi</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Teachers')} style={[styles.button, { marginTop: 12 }]}>
          <Text style={styles.buttonText}>Öğretmenlerimiz</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white' 
  },

  inner: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 24 
  },

  timeText: { 
    fontSize: 48, 
    fontWeight: '700', 
    color: '#000000', 
    marginBottom: 4 
  },

  dateText: { 
    fontSize: 20, 
    color: '#000000', 
    fontWeight: 'bold', 
    marginBottom: 24 
  },

  statusIcon: { 
    width: 140, 
    height: 140, 
    marginBottom: 140 
  },

  altyazi: { 
    fontSize: 18, 
    textAlign: 'center', 
    marginBottom: 40, 
    color: '#000000' 
  },

  title: { 
    fontSize: 18, 
    textAlign: 'center', 
    marginBottom: 50, 
    color: '#000000' 
  },

  button: { 
    width: '80%', 
    paddingVertical: 14, 
    backgroundColor: '#000', 
    borderRadius: 8, 
    alignItems: 'center' 
  },

  buttonText: { 
    color: '#fff', 
    fontSize: 16 }
});
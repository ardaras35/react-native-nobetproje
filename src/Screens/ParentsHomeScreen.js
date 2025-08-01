// Veli Ana Ekranı: geri tuşu ve başlık, okulun açık/kapalı durumuna göre nöbetçi öğretmenleri katlara göre listeleyen bileşenler bulunmaktadır.

import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentDateString } from '../utils/schedule';
import useSchedule from '../hooks/useSchedule';

// Kullanılan component dosyaları çekiliyor.
import FloorList from '../components/ParentsHome/FloorList';
import ParentsHeader from '../components/ParentsHome/ParentsHeader';
import styles from '../styles/ParentsHomeScreenStyle';

export default function ParentsHomeScreen() {
  const [teachers, setTeachers] = useState([]);

  const todayDate = getCurrentDateString();
  const {
    now,
    currentSlot,
    minutesToNextClass,
    minutesToNextBreak,
    isSchoolOpen,
  } = useSchedule(todayDate);

  useEffect(() => {
    const initializeTeachers = async () => {
      const localData = require('../data/teacher.json');
      const stored = await AsyncStorage.getItem('teachers');
      if (!stored) {
        await AsyncStorage.setItem('teachers', JSON.stringify(localData));
        setTeachers(localData);
      } else {
        setTeachers(JSON.parse(stored));
      }
    };
    initializeTeachers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ParentsHeader navigation={useSchedule.navigation} />

      <FloorList
        teachers={teachers}
        now={now}
        isSchoolOpen={isSchoolOpen}
        currentSlot={currentSlot}
        minutesToNextClass={minutesToNextClass}
        minutesToNextBreak={minutesToNextBreak}
      />
    </SafeAreaView>
  );
}

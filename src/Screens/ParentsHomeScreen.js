import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { getCurrentDateString } from '../utils/schedule';
import useSchedule from '../hooks/useSchedule';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    elevation: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333',
  },
  list: {
    padding: 16,
  },
  floorCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  floorTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  teacherRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  teacherInfo: {
    alignItems: 'center',
    gap: 6,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  timerText: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
});

export default function ParentsHomeScreen() {
  const navigation = useNavigation();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const initializeData = async () => {
      const localData = require('../data/teacher.json');
      const stored = await AsyncStorage.getItem('teachers');
      if (!stored) {
        await AsyncStorage.setItem('teachers', JSON.stringify(localData));
        setTeachers(localData);
      } else {
        setTeachers(JSON.parse(stored));
      }
    };
    initializeData();
  }, []);

  const todayDate = getCurrentDateString();
  const {
    now,
    currentSlot,
    minutesToNextClass,
    minutesToNextBreak,
    isSchoolOpen
  } = useSchedule(todayDate);


  const renderFloorCard = (floorNumber) => {
    const floorTeachers = teachers.filter(
      t => t.kat === floorNumber && t.durum !== 'İzinli'
    );
    const [left, right] = [floorTeachers[0], floorTeachers[1]];

    let timerText = '';
    
    if (!isSchoolOpen) {
      const currentHour = now.getHours();
      const isWeekend = [0, 6].includes(now.getDay()); 
      
      if (isWeekend) {
        timerText = 'Okulumuz hafta sonu kapalıdır.';
      } else if (currentHour < 9) {
        timerText = 'Okulumuz henüz açılmadı.';
      } else {
        timerText = 'Okulumuz kapalıdır.';
      }
    } else {
  
      if (!currentSlot) {

        timerText = minutesToNextClass !== null ? 
          `Derse başlamak için ${minutesToNextClass} dakika kaldı.` : 
          'Ders programı yükleniyor...';
      } else if (currentSlot.type === 'class') {

        timerText = minutesToNextBreak !== null ? 
          `Teneffüse ${minutesToNextBreak} dakika kaldı.` : 
          'Ders devam ediyor.';
      } else if (currentSlot.type === 'break') {

        timerText = minutesToNextClass !== null ? 
          `Derse ${minutesToNextClass} dakika kaldı.` : 
          'Teneffüs zamanı.';
      } else if (currentSlot.type === 'lunch') {

        timerText = minutesToNextClass !== null ? 
          `Öğle arasındadır, derse ${minutesToNextClass} dakika kaldı.` : 
          'Öğle arası.';
      }
    }

    const imageMap = {
      ilayda: require('../../assets/ilayda.png') ?? require('../../assets/default.png'),
      arda:   require('../../assets/arda.png'),
      selin:  require('../../assets/selin.png'),
      poyraz: require('../../assets/poyraz.png'),
      can:    require('../../assets/can.png'),
      baran:  require('../../assets/baran.png'),
      doruk:  require('../../assets/doruk.png'),
      ege:    require('../../assets/ege.png'),
      utku:   require('../../assets/utku.png'),
      yaren:  require('../../assets/yaren.png'),
    };

    return (
      <View key={floorNumber} style={styles.floorCard}>
        <Text style={styles.floorTitle}>{floorNumber}. Kat</Text>
        <View style={styles.teacherRow}>
          {[left, right].map((teacher, idx) => {
            const key = teacher
              ? `teacher-${floorNumber}-${teacher.id}`
              : `empty-${floorNumber}-${idx}`;
            return teacher ? (
              <TouchableOpacity
                key={key}
                style={styles.teacherInfo}
                onPress={() =>
                  Alert.alert(
                    'Öğretmen Bilgisi',
                    `${teacher.ad}\n${teacher.brans}\nDurum: ${teacher.durum}`
                  )
                }
              >
                <Image
                  source={imageMap[teacher?.image?.replace('.png', '')]}
                  style={styles.avatar}
                />
                <Text style={styles.name}>{teacher.ad}</Text>
              </TouchableOpacity>
            ) : (
              <View key={key} style={styles.teacherInfo}>
                <Text>---</Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.timerText}>{timerText}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Kat Bilgisi</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={[5, 4, 3, 2, 1]}
        renderItem={({ item }) => renderFloorCard(item)}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}
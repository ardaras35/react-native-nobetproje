// Öğretmenler Sayfası: Tüm öğretmenleri 2'li kart halinde listeler. Her karta basıldığında modal açılır.

import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from '../styles/TeachersScreenStyle'; 

// Kullanılan component dosyaları çekiliyor.
import Header from '../Components/TeacherScreen/Header'; 
import TeachersList from '../Components/TeacherScreen/TeacherList'; 
import TeacherModal from '../Components/TeacherScreen/TeacherModal'; 

export default function TeachersScreen() {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const navigation = useNavigation();

  // AsyncStorage'tan öğretmen verilerini al eğer yoksa json'dan yükle.
  useEffect(() => {
    const loadData = async () => {
      const localData = require('../data/teacher.json');
      const stored = await AsyncStorage.getItem('teachers');
      if (!stored) {
        await AsyncStorage.setItem('teachers', JSON.stringify(localData));
        setTeachers(localData);
      } else {
        setTeachers(JSON.parse(stored));
      }
    };
    loadData();
  }, []);

  // Sayfa her odaklandığında öğretmenleri güncelle.
  useFocusEffect(
    React.useCallback(() => {
      const refresh = async () => {
        const stored = await AsyncStorage.getItem('teachers');
        if (stored) {
          setTeachers(JSON.parse(stored));
        }
      };
      refresh();
    }, [])
  );

  // Modal kontrolü
  const openModal = (teacher) => setSelectedTeacher(teacher);
  const closeModal = () => setSelectedTeacher(null);

  return (
    <SafeAreaView style={styles.container}> 
      <TeachersList teachers={teachers} openModal={openModal} />

      <TeacherModal
        visible={!!selectedTeacher}
        teacher={selectedTeacher}
        onClose={closeModal}
      />
    </SafeAreaView>
  );
}
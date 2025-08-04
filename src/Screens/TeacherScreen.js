import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from '../styles/TeachersScreenStyle'; 

import Header from '../Components/TeacherScreen/Header'; 
import TeachersList from '../Components/TeacherScreen/TeacherList'; 
import SharedTeacherModal from '../Components/SharedTeacherModal'; 

export default function TeachersScreen() {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const navigation = useNavigation();

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

  const openModal = (teacher) => setSelectedTeacher(teacher);
  const closeModal = () => setSelectedTeacher(null);

  return (
    <SafeAreaView style={styles.container}> 
      <Header onBack={() => navigation.goBack()} />
      
      <TeachersList teachers={teachers} openModal={openModal} />

      <SharedTeacherModal
        visible={!!selectedTeacher}
        teacher={selectedTeacher}
        onClose={closeModal}
        isAdminMode={false}
      />
    </SafeAreaView>
  );
}
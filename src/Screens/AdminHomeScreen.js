// Admin Ana Ekranı: geri tuşu ve başlık, öğretmen arama ve filtreleme, durum ve kat atama, öğretmen ekleme/silme, istatistik ve boş liste durumu gibi bileşenler bulunmaktadır.

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View, FlatList, RefreshControl, SafeAreaView, StatusBar, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import teacherData from '../data/teacher.json';
import styles from '../styles/AdminHomeScreenStyle';

import AdminHeader from '../Components/AdminHomeScreen/AdminHeader';
import TeacherCard from '../Components/AdminHomeScreen/TeacherCard';
import AddTeacherModal from '../Components/AdminHomeScreen/AddTeacherModal';
import StatsModal from '../Components/AdminHomeScreen/StatsModal';
import EmptyState from '../Components/AdminHomeScreen/EmptyState';
import SearchAndFilterBar from '../Components/AdminHomeScreen/SearchAndFilterBar';
import ResultsHeader from '../Components/AdminHomeScreen/ResultsHeader';

export default function AdminHomeScreen() {
  const { t } = useTranslation();
  const [teachers, setTeachers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(t('tumu'));
  const [selectedFloorFilter, setSelectedFloorFilter] = useState(t('tumu'));
  const [showAddModal, setShowAddModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    ad: '',
    brans: '',
    durum: t('nobetci'),
    kat: null,
    image: null,
  });

  const filterOptions = [t('tumu'), t('nobetci'), t('derste'), t('izinli')];
  const floorOptions = [t('tumu'), t('1_kat'), t('2_kat'), t('3_kat'), t('4_kat'), t('5_kat')];

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  const loadData = async () => {
    try {
      const stored = await AsyncStorage.getItem('teachers');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setTeachers(parsed);
        else setTeachers([]);
      } else {
        setTeachers(teacherData);
      }
    } catch (err) {
      Alert.alert(t('hata_olustu'), t('veri_yuklenemedi'));
      setTeachers([]);
    }
  };

  const saveChanges = async () => {
    try {
      await AsyncStorage.setItem('teachers', JSON.stringify(teachers));
      Alert.alert(t('kaydedildi'));
    } catch {
      Alert.alert(t('hata_olustu'));
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const localizedBranch = t(teacher.brans); // diline göre görünen branş
      const search =
        teacher.ad.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
        localizedBranch.toLowerCase().includes(debouncedSearchText.toLowerCase());

      const status = selectedFilter === t('tumu') || teacher.durum === selectedFilter;
      
      let floor = true;
      if (selectedFloorFilter !== t('tumu')) {
        const floorNumber = parseInt(selectedFloorFilter.charAt(0));
        floor = teacher.kat === floorNumber;
      }
      
      return search && status && floor;
    });
  }, [teachers, debouncedSearchText, selectedFilter, selectedFloorFilter, t]);

  const statistics = useMemo(() => {
    const stats = {
      total: teachers.length,
      nobetci: teachers.filter(teacher => teacher.durum === t('nobetci')).length,
      derste: teachers.filter(teacher => teacher.durum === t('derste')).length,
      izinli: teachers.filter(teacher => teacher.durum === t('izinli')).length,
      floorStats: {},
    };
    for (let i = 1; i <= 5; i++) {
      stats.floorStats[i] = teachers.filter(teacher => teacher.kat === i).length;
    }
    return stats;
  }, [teachers, t]);

  const updateStatus = useCallback((id, status) => {
    setTeachers(prev => prev.map(teacher => teacher.id === id ? { ...teacher, durum: status } : teacher));
  }, []);

  const updateFloor = useCallback((id, newFloor) => {
    setTeachers(prev => {
      const teacher = prev.find(x => x.id === id);
      if (teacher.durum === t('derste') || teacher.durum === t('izinli')) return prev;
      
      const count = prev.filter(x => x.kat === newFloor && x.id !== id).length;
      if (count >= 2) return prev;
      
      return prev.map(x => x.id === id ? { ...x, kat: newFloor } : x);
    });
  }, [t]);

  const removeTeacher = useCallback((id) => {
    setTeachers(prev => prev.filter(teacher => teacher.id !== id));
  }, []);

  const addNewTeacher = useCallback(() => {
    if (!newTeacher.ad || !newTeacher.brans) return;
    const id = Math.max(...teachers.map(teacher => teacher.id), 0) + 1;
    const newT = { ...newTeacher, id };
    setTeachers(prev => [...prev, newT]);
    setNewTeacher({ ad: '', brans: '', durum: t('nobetci'), kat: null, image: null });
    setShowAddModal(false);
  }, [newTeacher, teachers, t]);

  const handleSearchTextChange = useCallback((text) => {
    setSearchText(text);
  }, []);

  const handleFilterChange = useCallback((filter) => {
    setSelectedFilter(filter);
  }, []);

  const handleFloorFilterChange = useCallback((filter) => {
    setSelectedFloorFilter(filter);
  }, []);

  const ListHeaderComponent = useCallback(() => (
    <ResultsHeader
      count={filteredTeachers.length}
      onAdd={() => setShowAddModal(true)}
    />
  ), [filteredTeachers.length]);

  const renderTeacherCard = useCallback(({ item }) => (
    <TeacherCard
      teacher={item}
      updateStatus={updateStatus}
      updateFloor={updateFloor}
      removeTeacher={removeTeacher}
    />
  ), [updateStatus, updateFloor, removeTeacher]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <AdminHeader
          onBack={() => null}
          onSave={saveChanges}
          onShowStats={() => setShowStatsModal(true)}
        />

        <SearchAndFilterBar
          searchText={searchText}
          setSearchText={handleSearchTextChange}
          filterOptions={filterOptions}
          selectedFilter={selectedFilter}
          setSelectedFilter={handleFilterChange}
          floorOptions={floorOptions}
          selectedFloorFilter={selectedFloorFilter}
          setSelectedFloorFilter={handleFloorFilterChange}
        />

        <FlatList
          data={filteredTeachers}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={ListHeaderComponent}
          renderItem={renderTeacherCard}
          contentContainerStyle={styles.listContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={<EmptyState />}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[]}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="none"
          removeClippedSubviews={false}
          getItemLayout={null}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={10}
        />

        <StatsModal
          visible={showStatsModal}
          onClose={() => setShowStatsModal(false)}
          statistics={statistics}
        />
        
        <AddTeacherModal
          visible={showAddModal}
          onClose={() => setShowAddModal(false)}
          newTeacher={newTeacher}
          setNewTeacher={setNewTeacher}
          onAdd={addNewTeacher}
          branches={[...new Set(teachers.map(teacher => teacher.brans))]}
          statusColors={{
            [t('nobetci')]: '#4CAF50',
            [t('derste')]: '#2196F3',
            [t('izinli')]: '#FF9800'
          }}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

// Admin Ana Ekranı: geri tuşu ve başlık, öğretmen arama ve filtreleme, durum ve kat atama, öğretmen ekleme/silme, istatistik ve boş liste durumu gibi bileşenler bulunmaktadır.

import React, { useState, useEffect, useMemo } from 'react';
import {View, FlatList, RefreshControl, SafeAreaView, StatusBar, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import teacherData from '../data/teacher.json';
import styles from '../styles/AdminHomeScreenStyle';

// Kullanılan component dosyaları çekiliyor.
import AdminHeader from '../Components/AdminHomeScreen/AdminHeader';
import TeacherCard from '../Components/AdminHomeScreen/TeacherCard';
import AddTeacherModal from '../Components/AdminHomeScreen/AddTeacherModal';
import StatsModal from '../Components/AdminHomeScreen/StatsModal';
import EmptyState from '../Components/AdminHomeScreen/EmptyState';
import SearchAndFilterBar from '../Components/AdminHomeScreen/SearchAndFilterBar';
import ResultsHeader from '../Components/AdminHomeScreen/ResultsHeader';

export default function AdminHomeScreen() {
  const [teachers, setTeachers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Tümü');
  const [selectedFloorFilter, setSelectedFloorFilter] = useState('Tümü');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    ad: '',
    brans: '',
    durum: 'Nöbetçi',
    kat: null,
    image: null,
  });

  // Sabitler
  const filterOptions = ['Tümü', 'Nöbetçi', 'Derste', 'İzinli'];
  const floorOptions = ['Tümü', '1. Kat', '2. Kat', '3. Kat', '4. Kat', '5. Kat'];

  // Öğretmen verilerini yükle
  useEffect(() => {
    loadData();
  }, []);

 const loadData = async () => {
  try {
    const stored = await AsyncStorage.getItem('teachers');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) setTeachers(parsed);  // ✅ Sadece dizi ise set et
      else setTeachers([]);
    } else {
      setTeachers(teacherData);
    }
  } catch (err) {
    alert('Veri yüklenemedi.');
    setTeachers([]);  // ❗ Hata olursa boş dizi ata
  }
};

  const saveChanges = async () => {
    try {
      await AsyncStorage.setItem('teachers', JSON.stringify(teachers));
      Alert.alert('Kaydedildi!');
    } catch {
      Alert.alert('Hata oluştu!');
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  // Filtrelenmiş öğretmen listesi
  const filteredTeachers = useMemo(() => {
    return teachers.filter((t) => {
      const search = t.ad.toLowerCase().includes(searchText.toLowerCase()) || t.brans.toLowerCase().includes(searchText.toLowerCase());
      const status = selectedFilter === 'Tümü' || t.durum === selectedFilter;
      const floor = selectedFloorFilter === 'Tümü' || t.kat === parseInt(selectedFloorFilter.charAt(0));
      return search && status && floor;
    });
  }, [teachers, searchText, selectedFilter, selectedFloorFilter]);

  // İstatistik hesaplama
  const statistics = useMemo(() => {
    const stats = {
      total: teachers.length,
      nobetci: teachers.filter(t => t.durum === 'Nöbetçi').length,
      derste: teachers.filter(t => t.durum === 'Derste').length,
      izinli: teachers.filter(t => t.durum === 'İzinli').length,
      floorStats: {},
    };
    for (let i = 1; i <= 5; i++) {
      stats.floorStats[i] = teachers.filter(t => t.kat === i).length;
    }
    return stats;
  }, [teachers]);

  const updateStatus = (id, status) => {
    const updated = teachers.map(t => t.id === id ? { ...t, durum: status } : t);
    setTeachers(updated);
  };

  const updateFloor = (id, newFloor) => {
    const t = teachers.find(x => x.id === id);
    if (t.durum === 'Derste' || t.durum === 'İzinli') return;
    const count = teachers.filter(x => x.kat === newFloor && x.id !== id).length;
    if (count >= 2) return;
    const updated = teachers.map(x => x.id === id ? { ...x, kat: newFloor } : x);
    setTeachers(updated);
  };

  const removeTeacher = (id) => {
    setTeachers(prev => prev.filter(t => t.id !== id));
  };

  const addNewTeacher = () => {
    if (!newTeacher.ad || !newTeacher.brans) return;
    const id = Math.max(...teachers.map(t => t.id), 0) + 1;
    const newT = { ...newTeacher, id };
    setTeachers(prev => [...prev, newT]);
    setNewTeacher({ ad: '', brans: '', durum: 'Nöbetçi', kat: null, image: null });
    setShowAddModal(false);
  };

  // FlatList Header Component - Fixed search/filters
  const ListHeaderComponent = () => (
    <View>
      {/* Search and Filter Bar */}
      <SearchAndFilterBar
        searchText={searchText}
        setSearchText={setSearchText}
        filterOptions={filterOptions}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        floorOptions={floorOptions}
        selectedFloorFilter={selectedFloorFilter}
        setSelectedFloorFilter={setSelectedFloorFilter}
      />

      {/* Results Header */}
      <ResultsHeader
        count={filteredTeachers.length}
        onAdd={() => setShowAddModal(true)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Fixed Header - Always visible */}
      <AdminHeader
        onBack={() => null}
        onSave={saveChanges}
        onShowStats={() => setShowStatsModal(true)}
      />

      {/* Main Content - Single FlatList with header */}
      <FlatList
        data={filteredTeachers}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={({ item }) => (
          <TeacherCard
            teacher={item}
            updateStatus={updateStatus}
            updateFloor={updateFloor}
            removeTeacher={removeTeacher}
          />
        )}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={<EmptyState />}
        showsVerticalScrollIndicator={false}
        // Sticky header için
        stickyHeaderIndices={[]}
      />

      {/* Modals */}
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
        branches={[...new Set(teachers.map(t => t.brans))]} // Unique branches
        statusColors={{
          'Nöbetçi': '#4CAF50',
          'Derste': '#2196F3', 
          'İzinli': '#FF9800'
        }}
      />
    </SafeAreaView>
  );
}
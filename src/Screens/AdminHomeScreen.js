// Admin Ana Ekranı: geri tuşu ve başlık, öğretmen arama ve filtreleme, durum ve kat atama, öğretmen ekleme/silme, istatistik ve boş liste durumu gibi bileşenler bulunmaktadır.

import React, { useState, useEffect, useMemo } from 'react';
import {View, FlatList, TextInput, RefreshControl, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import teacherData from '../data/teacher.json';
import styles from '../styles/AdminHomeScreenStyle';

// Kullanılan component dosyaları çekiliyor.
import AdminHeader from '../components/AdminHomeScreen/AdminHeader';
import TeacherCard from '../components/AdminHomeScreen/TeacherCard';
import AddTeacherModal from '../components/AdminHomeScreen/AddTeacherModal';
import StatsModal from '../components/AdminHomeScreen/StatsModal';
import EmptyState from '../components/AdminHomeScreen/EmptyState';
import FilterBar from '../components/AdminHomeScreen/FilterBar';
import ResultsHeader from '../components/AdminHomeScreen/ResultsHeader';

export default function AdvancedAdminPanel() {
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
      if (stored) setTeachers(JSON.parse(stored));
      else setTeachers(teacherData);
    } catch (err) {
      alert('Veri yüklenemedi.');
    }
  };

  const saveChanges = async () => {
    try {
      await AsyncStorage.setItem('teachers', JSON.stringify(teachers));
      alert('Kaydedildi!');
    } catch {
      alert('Hata oluştu!');
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Üst başlık */}
      <AdminHeader
        onBack={() => null}
        onSave={saveChanges}
        onStats={() => setShowStatsModal(true)}
      />

      {/* Arama ve filtreler */}
      <View style={styles.searchSection}>

        {/* Arama kutusu */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Öğretmen ara..."
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText ? (
            <Ionicons name="close-circle" size={20} color="#666" onPress={() => setSearchText('')} />
          ) : null}
        </View>

        {/* Filtre butonları */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FilterBar
            options={filterOptions}
            selected={selectedFilter}
            onSelect={setSelectedFilter}
            color="#007AFF"
          />
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FilterBar
            options={floorOptions}
            selected={selectedFloorFilter}
            onSelect={setSelectedFloorFilter}
            color="#FF9800"
          />
        </ScrollView>
      </View>

      {/* Filtrelenmiş sonuç metni ve ekle butonu */}
      <ResultsHeader
        count={filteredTeachers.length}
        onAdd={() => setShowAddModal(true)}
      />

      {/* Öğretmen Kartları */}
      <FlatList
        data={filteredTeachers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TeacherCard
            teacher={item}
            onUpdateStatus={updateStatus}
            onUpdateFloor={updateFloor}
            onDelete={removeTeacher}
          />
        )}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={<EmptyState />}
        showsVerticalScrollIndicator={false}
      />

      {/* Modal bileşenleri */}
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
        addNewTeacher={addNewTeacher}
      />
    </SafeAreaView>
  );
}

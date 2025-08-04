import React, { useState, useEffect, useMemo } from 'react';
<<<<<<< HEAD
import { View, FlatList, RefreshControl, SafeAreaView, StatusBar, Alert, TouchableOpacity } from 'react-native';
=======
import {View, FlatList, RefreshControl, SafeAreaView, StatusBar, Alert } from 'react-native';
>>>>>>> e4baae747b51bf9ead8ba301ef036efe6c4d6956
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import teacherData from '../data/teacher.json';
import styles from '../styles/AdminHomeScreenStyle';

import AdminHeader from '../Components/AdminHomeScreen/AdminHeader';
import TeacherCard from '../Components/AdminHomeScreen/TeacherCard';
import AddTeacherModal from '../Components/AdminHomeScreen/AddTeacherModal';
import StatsModal from '../Components/AdminHomeScreen/StatsModal';
import EmptyState from '../Components/AdminHomeScreen/EmptyState';
import SearchAndFilterBar from '../Components/AdminHomeScreen/SearchAndFilterBar';
import ResultsHeader from '../Components/AdminHomeScreen/ResultsHeader';
import SharedTeacherModal from '../Components/SharedTeacherModal';

export default function AdminHomeScreen() {
  const navigation = useNavigation();
  const [teachers, setTeachers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Tümü');
  const [selectedFloorFilter, setSelectedFloorFilter] = useState('Tümü');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    ad: '',
    brans: '',
    durum: 'Nöbetçi',
    kat: null,
    image: null,
  });

  const filterOptions = ['Tümü', 'Nöbetçi', 'Derste', 'İzinli'];
  const floorOptions = ['Tümü', '1. Kat', '2. Kat', '3. Kat', '4. Kat', '5. Kat'];

  useEffect(() => {
    loadData();
  }, []);

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
      alert('Veri yüklenemedi.');
      setTeachers([]);
    }
<<<<<<< HEAD
  };
=======
  } catch (err) {
    alert('Veri yüklenemedi.');
    setTeachers([]);  // ❗ Hata olursa boş dizi ata
  }
};
>>>>>>> e4baae747b51bf9ead8ba301ef036efe6c4d6956

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

  const filteredTeachers = useMemo(() => {
    return teachers.filter((t) => {
      const search = t.ad.toLowerCase().includes(searchText.toLowerCase()) || 
                   t.brans.toLowerCase().includes(searchText.toLowerCase());
      const status = selectedFilter === 'Tümü' || t.durum === selectedFilter;
      const floor = selectedFloorFilter === 'Tümü' || 
                   t.kat === parseInt(selectedFloorFilter.charAt(0));
      return search && status && floor;
    });
  }, [teachers, searchText, selectedFilter, selectedFloorFilter]);

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

<<<<<<< HEAD
  const ListHeaderComponent = () => (
    <View>
=======
  // FlatList Header Component - Fixed search/filters
  const ListHeaderComponent = () => (
    <View>
      {/* Search and Filter Bar */}
>>>>>>> e4baae747b51bf9ead8ba301ef036efe6c4d6956
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
<<<<<<< HEAD
      <ResultsHeader
        count={filteredTeachers.length}
        onAdd={() => setShowAddModal(true)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <AdminHeader
        navigation={navigation}
        onSave={saveChanges}
        onShowStats={() => setShowStatsModal(true)}
=======

      {/* Results Header */}
      <ResultsHeader
        count={filteredTeachers.length}
        onAdd={() => setShowAddModal(true)}
>>>>>>> e4baae747b51bf9ead8ba301ef036efe6c4d6956
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
<<<<<<< HEAD
          <TouchableOpacity onPress={() => setSelectedTeacher(item)}>
            <TeacherCard
              teacher={item}
              updateStatus={updateStatus}
              updateFloor={updateFloor}
              removeTeacher={removeTeacher}
            />
          </TouchableOpacity>
=======
          <TeacherCard
            teacher={item}
            updateStatus={updateStatus}
            updateFloor={updateFloor}
            removeTeacher={removeTeacher}
          />
>>>>>>> e4baae747b51bf9ead8ba301ef036efe6c4d6956
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

<<<<<<< HEAD
      <SharedTeacherModal
        visible={!!selectedTeacher}
        teacher={selectedTeacher}
        onClose={() => setSelectedTeacher(null)}
        onStatusChange={updateStatus}
        onFloorChange={updateFloor}
        onDelete={removeTeacher}
        isAdminMode={true}
      />
      
=======
      {/* Modals */}
>>>>>>> e4baae747b51bf9ead8ba301ef036efe6c4d6956
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
<<<<<<< HEAD
        branches={[...new Set(teachers.map(t => t.brans))]}
=======
        branches={[...new Set(teachers.map(t => t.brans))]} // Unique branches
>>>>>>> e4baae747b51bf9ead8ba301ef036efe6c4d6956
        statusColors={{
          'Nöbetçi': '#4CAF50',
          'Derste': '#2196F3', 
          'İzinli': '#FF9800'
        }}
      />
    </SafeAreaView>
  );
}
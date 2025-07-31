import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
  Modal,
  Animated,
  Dimensions,
  StatusBar,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import teacherData from '../data/teacher.json';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

export default function AdvancedAdminPanel() {
  const navigation = useNavigation();
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
    image: null
  });

  const filterOptions = ['Tümü', 'Nöbetçi', 'Derste', 'İzinli'];
  const floorOptions = ['Tümü', '1. Kat', '2. Kat', '3. Kat', '4. Kat', '5. Kat'];
  const statusColors = {
    'Nöbetçi': '#4CAF50',
    'Derste': '#2196F3',
    'İzinli': '#FF9800',
    'Atanmadı': '#9E9E9E'
  };

  const branches = [
    'Matematik', 'Türkçe', 'İngilizce', 'Fen Bilgisi', 'Sosyal Bilgiler',
    'Beden Eğitimi', 'Müzik', 'Resim', 'Bilgisayar', 'Rehberlik'
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('teachers');
      if (storedData) {
        setTeachers(JSON.parse(storedData));
      } else {
        setTeachers(teacherData);
      }
    } catch (error) {
      Alert.alert('Hata', 'Veriler yüklenemedi.');
    }
  };

  const saveChanges = async () => {
    try {
      await AsyncStorage.setItem('teachers', JSON.stringify(teachers));
      Alert.alert('✅ Başarılı', 'Değişiklikler kaydedildi!');
    } catch (error) {
      Alert.alert('❌ Hata', 'Değişiklikler kaydedilemedi.');
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  const filteredTeachers = useMemo(() => {
    return teachers.filter(teacher => {
      const matchesSearch = teacher.ad.toLowerCase().includes(searchText.toLowerCase()) ||
                           teacher.brans.toLowerCase().includes(searchText.toLowerCase());
      
      const matchesStatus = selectedFilter === 'Tümü' || teacher.durum === selectedFilter;
      
      const matchesFloor = selectedFloorFilter === 'Tümü' || 
                          (selectedFloorFilter !== 'Tümü' && teacher.kat === parseInt(selectedFloorFilter.charAt(0)));

      return matchesSearch && matchesStatus && matchesFloor;
    });
  }, [teachers, searchText, selectedFilter, selectedFloorFilter]);

  const statistics = useMemo(() => {
    const stats = {
      total: teachers.length,
      nobetci: teachers.filter(t => t.durum === 'Nöbetçi').length,
      derste: teachers.filter(t => t.durum === 'Derste').length,
      izinli: teachers.filter(t => t.durum === 'İzinli').length,
      floorStats: {}
    };

    for (let i = 1; i <= 5; i++) {
      stats.floorStats[i] = teachers.filter(t => t.kat === i).length;
    }

    return stats;
  }, [teachers]);

  const updateStatus = (id, newStatus) => {
    const updatedTeachers = teachers.map(t =>
      t.id === id ? { ...t, durum: newStatus } : t
    );
    setTeachers(updatedTeachers);
  };

  const updateFloor = (id, newFloor) => {
    const teacher = teachers.find(t => t.id === id);

    if (teacher.durum === 'İzinli' || teacher.durum === 'Derste') {
      Alert.alert(
        '⚠️ İşlem Geçersiz',
        `Bu öğretmen şu anda "${teacher.durum}" durumunda. Kat ataması yapılamaz.`,
        [{ text: 'Tamam', style: 'default' }]
      );
      return;
    }

    const count = teachers.filter(t => t.kat === newFloor && t.id !== id).length;
    if (count >= 2) {
      Alert.alert('🚫 Sınır Aşıldı', `${newFloor}. katta zaten 2 öğretmen var.`);
      return;
    }

    const updatedTeachers = teachers.map(t =>
      t.id === id ? { ...t, kat: newFloor } : t
    );
    setTeachers(updatedTeachers);
  };

  const removeTeacher = (id) => {
    const teacher = teachers.find(t => t.id === id);
    Alert.alert(
      '🗑️ Öğretmen Sil',
      `"${teacher.ad}" adlı öğretmeni silmek istediğinizden emin misiniz?`,
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Sil',
          style: 'destructive',
          onPress: () => {
            setTeachers(prev => prev.filter(t => t.id !== id));
          }
        }
      ]
    );
  };

  const addNewTeacher = () => {
    if (!newTeacher.ad || !newTeacher.brans) {
      Alert.alert('⚠️ Eksik Bilgi', 'Öğretmen adı ve branş alanları zorunludur.');
      return;
    }

    const newId = Math.max(...teachers.map(t => t.id), 0) + 1;
    const teacherToAdd = {
      ...newTeacher,
      id: newId,
      image: null
    };

    setTeachers(prev => [...prev, teacherToAdd]);
    setNewTeacher({ ad: '', brans: '', durum: 'Nöbetçi', kat: null, image: null });
    setShowAddModal(false);
    Alert.alert('✅ Başarılı', 'Yeni öğretmen eklendi!');
  };

  const imageMap = {
    "ilayda.png": require('../../assets/ilayda.png'),
    "arda.png": require('../../assets/arda.png'),
    "selin.png": require('../../assets/selin.png'),
    "poyraz.png": require('../../assets/poyraz.png'),
    "can.png": require('../../assets/can.png'),
    "baran.png": require('../../assets/baran.png'),
    "doruk.png": require('../../assets/doruk.png'),
    "ege.png": require('../../assets/ege.png'),
    "utku.png": require('../../assets/utku.png'),
    "yaren.png": require('../../assets/yaren.png'),
  };

  const renderTeacherCard = ({ item, index }) => (
    <Animated.View style={[styles.card, { opacity: 1 }]}>
      <View style={styles.cardHeader}>
        <View style={styles.teacherInfo}>
          {item.image && imageMap[item.image] ? (
            <Image source={imageMap[item.image]} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, styles.defaultAvatar]}>
              <Text style={styles.avatarText}>{item.ad.charAt(0).toUpperCase()}</Text>
            </View>
          )}
          <View style={styles.teacherDetails}>
            <Text style={styles.teacherName}>{item.ad}</Text>
            <Text style={styles.teacherBranch}>{item.brans}</Text>
            <View style={styles.statusBadge}>
              <View style={[styles.statusDot, { backgroundColor: statusColors[item.durum] }]} />
              <Text style={styles.statusText}>{item.durum}</Text>
            </View>
          </View>
        </View>
        <View style={styles.floorBadge}>
          <Text style={styles.floorText}>{item.kat ? `${item.kat}. Kat` : 'Kat Yok'}</Text>
        </View>
      </View>

      <View style={styles.actionSection}>
        <Text style={styles.sectionTitle}>Durum Güncelle</Text>
        <View style={styles.statusButtons}>
          {['Nöbetçi', 'Derste', 'İzinli'].map(status => (
            <TouchableOpacity
              key={status}
              style={[
                styles.statusButton,
                { backgroundColor: statusColors[status] },
                item.durum === status && styles.activeStatusButton
              ]}
              onPress={() => updateStatus(item.id, status)}
            >
              <Text style={styles.statusButtonText}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Kat Ataması</Text>
        <View style={styles.floorButtons}>
          {[1, 2, 3, 4, 5].map(floor => (
            <TouchableOpacity
              key={floor}
              style={[
                styles.floorButton,
                item.kat === floor && styles.activeFloorButton,
                (item.durum === 'İzinli' || item.durum === 'Derste') && styles.disabledButton
              ]}
              onPress={() => updateFloor(item.id, floor)}
              disabled={item.durum === 'İzinli' || item.durum === 'Derste'}
            >
              <Text style={[
                styles.floorButtonText,
                item.kat === floor && styles.activeFloorButtonText
              ]}>
                {floor}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeTeacher(item.id)}
        >
          <Ionicons name="trash-outline" size={16} color="#fff" />
          <Text style={styles.deleteButtonText}>Öğretmeni Sil</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  const renderStatsModal = () => (
    <Modal visible={showStatsModal} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.statsModal}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>📊 İstatistikler</Text>
            <TouchableOpacity onPress={() => setShowStatsModal(false)}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.statsGrid}>
              <View style={[styles.statCard, { backgroundColor: '#4CAF50' }]}>
                <Text style={styles.statNumber}>{statistics.nobetci}</Text>
                <Text style={styles.statLabel}>Nöbetçi</Text>
              </View>
              <View style={[styles.statCard, { backgroundColor: '#2196F3' }]}>
                <Text style={styles.statNumber}>{statistics.derste}</Text>
                <Text style={styles.statLabel}>Derste</Text>
              </View>
              <View style={[styles.statCard, { backgroundColor: '#FF9800' }]}>
                <Text style={styles.statNumber}>{statistics.izinli}</Text>
                <Text style={styles.statLabel}>İzinli</Text>
              </View>
              <View style={[styles.statCard, { backgroundColor: '#9C27B0' }]}>
                <Text style={styles.statNumber}>{statistics.total}</Text>
                <Text style={styles.statLabel}>Toplam</Text>
              </View>
            </View>

            <View style={styles.floorStats}>
              <Text style={styles.floorStatsTitle}>Kat Dağılımı</Text>
              {Object.entries(statistics.floorStats).map(([floor, count]) => (
                <View key={floor} style={styles.floorStatRow}>
                  <Text style={styles.floorStatText}>{floor}. Kat</Text>
                  <View style={styles.floorStatBar}>
                    <View
                      style={[
                        styles.floorStatFill,
                        { width: `${(count / 2) * 100}%` }
                      ]}
                    />
                    <Text style={styles.floorStatCount}>{count}/2</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  const renderAddModal = () => (
    <Modal visible={showAddModal} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.addModal}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>👨‍🏫 Yeni Öğretmen Ekle</Text>
            <TouchableOpacity onPress={() => setShowAddModal(false)}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Öğretmen Adı *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Öğretmen adını girin"
                value={newTeacher.ad}
                onChangeText={(text) => setNewTeacher(prev => ({ ...prev, ad: text }))}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Branş *</Text>
              <View style={styles.branchGrid}>
                {branches.map(branch => (
                  <TouchableOpacity
                    key={branch}
                    style={[
                      styles.branchButton,
                      newTeacher.brans === branch && styles.selectedBranchButton
                    ]}
                    onPress={() => setNewTeacher(prev => ({ ...prev, brans: branch }))}
                  >
                    <Text style={[
                      styles.branchButtonText,
                      newTeacher.brans === branch && styles.selectedBranchButtonText
                    ]}>
                      {branch}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Başlangıç Durumu</Text>
              <View style={styles.statusGrid}>
                {['Nöbetçi', 'Derste', 'İzinli'].map(status => (
                  <TouchableOpacity
                    key={status}
                    style={[
                      styles.modalStatusButton,
                      { backgroundColor: statusColors[status] },
                      newTeacher.durum === status && styles.selectedModalStatusButton
                    ]}
                    onPress={() => setNewTeacher(prev => ({ ...prev, durum: status }))}
                  >
                    <Text style={styles.modalStatusButtonText}>{status}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity style={styles.addButton} onPress={addNewTeacher}>
              <Ionicons name="person-add" size={20} color="#fff" />
              <Text style={styles.addButtonText}>Öğretmen Ekle</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Admin Panel</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={() => setShowStatsModal(true)} style={styles.headerButton}>
            <Ionicons name="stats-chart" size={20} color="#007AFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={saveChanges} style={styles.saveButton}>
            <Ionicons name="save" size={16} color="#fff" />
            <Text style={styles.saveButtonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search and Filters */}
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Öğretmen ara..."
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText ? (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Ionicons name="close-circle" size={20} color="#666" />
            </TouchableOpacity>
          ) : null}
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
          {filterOptions.map(filter => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                selectedFilter === filter && styles.activeFilterButton
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text style={[
                styles.filterButtonText,
                selectedFilter === filter && styles.activeFilterButtonText
              ]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
          {floorOptions.map(floor => (
            <TouchableOpacity
              key={floor}
              style={[
                styles.filterButton,
                selectedFloorFilter === floor && styles.activeFloorFilterButton
              ]}
              onPress={() => setSelectedFloorFilter(floor)}
            >
              <Text style={[
                styles.filterButtonText,
                selectedFloorFilter === floor && styles.activeFloorFilterButtonText
              ]}>
                {floor}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Results Header */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsText}>
          {filteredTeachers.length} öğretmen gösteriliyor
        </Text>
        <TouchableOpacity onPress={() => setShowAddModal(true)} style={styles.addTeacherButton}>
          <Ionicons name="add" size={20} color="#007AFF" />
          <Text style={styles.addTeacherButtonText}>Yeni Ekle</Text>
        </TouchableOpacity>
      </View>

      {/* Teachers List */}
      <FlatList
        data={filteredTeachers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTeacherCard}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="school-outline" size={64} color="#ccc" />
            <Text style={styles.emptyStateText}>Öğretmen bulunamadı</Text>
            <Text style={styles.emptyStateSubtext}>
              Arama kriterlerini değiştirin veya yeni öğretmen ekleyin
            </Text>
          </View>
        }
      />

      {renderStatsModal()}
      {renderAddModal()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerButton: {
    padding: 8,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  searchSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    color: '#333',
  },
  filtersContainer: {
    marginBottom: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  activeFilterButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  activeFloorFilterButton: {
    backgroundColor: '#FF9800',
    borderColor: '#FF9800',
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeFilterButtonText: {
    color: '#fff',
  },
  activeFloorFilterButtonText: {
    color: '#fff',
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  resultsText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  addTeacherButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  addTeacherButtonText: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 14,
  },
  listContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
  },
  teacherInfo: {
    flexDirection: 'row',
    flex: 1,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  defaultAvatar: {
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1976d2',
  },
  teacherDetails: {
    flex: 1,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  teacherBranch: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  floorBadge: {
    backgroundColor: '#f1f3f4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  floorText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  actionSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  statusButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  statusButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    opacity: 0.8,
  },
  activeStatusButton: {
    opacity: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  statusButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  floorButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  floorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f3f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeFloorButton: {
    backgroundColor: '#FF9800',
  },
  disabledButton: {
    opacity: 0.3,
  },
  floorButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeFloorButtonText: {
    color: '#fff',
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#999',
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 40,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  statsModal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '80%',
    paddingBottom: 20,
  },
  addModal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 24,
    paddingTop: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginTop: 4,
  },
  floorStats: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  floorStatsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
  floorStatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  floorStatText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    width: 60,
  },
  floorStatBar: {
    flex: 1,
    height: 24,
    backgroundColor: '#f1f3f4',
    borderRadius: 12,
    marginLeft: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  floorStatFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 12,
  },
  floorStatCount: {
    position: 'absolute',
    right: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  inputGroup: {
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  branchGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  branchButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  selectedBranchButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  branchButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  selectedBranchButtonText: {
    color: '#fff',
  },
  statusGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  modalStatusButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    opacity: 0.8,
  },
  selectedModalStatusButton: {
    opacity: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  modalStatusButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28a745',
    marginHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
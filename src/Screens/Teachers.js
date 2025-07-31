import { View, Text, FlatList, Pressable, StyleSheet, Modal, TouchableOpacity, Alert, Linking, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Teachers() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const navigation = useNavigation();

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


  useFocusEffect(
    React.useCallback(() => {
      const reload = async () => {
        const stored = await AsyncStorage.getItem('teachers');
        if (stored) {
          setTeachers(JSON.parse(stored));
        }
      };
      reload();
    }, [])
  );

  const openModal = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const closeModal = () => {
    setSelectedTeacher(null);
  };

  const handleCall = () => {
    if (!selectedTeacher?.telefon) {
      Alert.alert('Uyarı', 'Telefon numarası bulunamadı.');
      return;
    }

    const dialNumber = `tel:${selectedTeacher.telefon}`;

    if (selectedTeacher?.durum === 'İzinli' || selectedTeacher?.durum === 'Derste') {
      Alert.alert(
        'Emin misiniz?',
        `${selectedTeacher.durum} olan bir öğretmeni aramak üzeresiniz. Devam etmek istiyor musunuz?`,
        [
          { text: 'İptal', style: 'cancel' },
          { text: 'Ara', onPress: () => Linking.openURL(dialNumber) }
        ]
      );
    } else {
      Linking.openURL(dialNumber);
    }
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

  const renderItem = ({ item }) => (
    <Pressable style={styles.card} onPress={() => openModal(item)}>
      <Image
        source={imageMap[item.image]}
        style={styles.image}
      />
      <Text style={styles.name}>{item.ad}</Text>
      <Text style={styles.branch}>{item.brans}</Text>
      <Text style={styles.branch}>Durum: {item.durum || 'Atanmadı'}</Text>
      <Text style={styles.branch}>Kat: {item.kat || '-'}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Öğretmenlerimiz</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={teachers}
        key={'2-columns'}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />

      <Modal
        visible={!!selectedTeacher}
        animationType="fade"
        transparent
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image
              source={imageMap[selectedTeacher?.image]}
              style={styles.modalImage}
            />
            <Text style={styles.modalName}>{selectedTeacher?.ad}</Text>
            <Text style={styles.modalBranch}>{selectedTeacher?.brans}</Text>
            <Text style={styles.modalDetail}>Telefon: {selectedTeacher?.telefon}</Text>
            <Text style={styles.modalDetail}>Durum: {selectedTeacher?.durum || 'Bilinmiyor'}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={handleCall} style={styles.callButton}>
                <Text style={styles.callButtonText}>Ara</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Kapat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },

  list: {
    padding: 16,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 16,
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginTop: 8,
  },

  branch: {
    fontSize: 14,
    color: '#777777',
    marginTop: 4,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    zIndex: 99,
  },

  header: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: '#333333',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    width: '80%',
  },

  modalImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },

  modalName: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 8,
  },

  modalBranch: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },

  modalDetail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },

  closeButton: {
    width: 100,
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 8,
  },

  closeButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },

  callButton: {
    width: 100,
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 8,
  },

  callButtonText: {
    color: '#ffffff',
    marginLeft: 8,
    fontWeight: '600',
    textAlign: 'center',
    justifyContent: 'center',
  },
  
});

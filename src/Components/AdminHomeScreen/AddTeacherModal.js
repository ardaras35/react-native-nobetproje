// Yeni öğretmen ekleme modalı: Öğretmen adı, branş seçimi, başlangıç durumu seçim alanları içerir. 
// {t('ogretmen_ekle')} butonuna basıldığında yeni öğretmen verisini üst componente iletir.
// Kullanıcıdan öğretmen bilgilerini alarak AsyncStorage'a kaydedilecek hale getirir.

import {View, Text, Modal, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/AddTeacherModalStyle';

const AddTeacherModal = ({
  visible,
  onClose,
  onAdd,
  newTeacher,
  setNewTeacher,
  branches = [], 
  statusColors = {} 
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.addModal}>

          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{t('_yeni_ogretmen_ekle')}</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>{t('ogretmen_adi_')}</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Öğretmen adını girin"
                value={newTeacher?.ad || ''} 
                onChangeText={(text) =>
                  setNewTeacher((prev) => ({ ...prev, ad: text }))
                }
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>{t('brans_')}</Text>
              <View style={styles.branchGrid}>
                {branches && branches.length > 0 ? (
                  branches.map((branch) => (
                    <TouchableOpacity
                      key={branch}
                      style={[
                        styles.branchButton,
                        newTeacher?.brans === branch && styles.selectedBranchButton,
                      ]}
                      onPress={() =>
                        setNewTeacher((prev) => ({ ...prev, brans: branch }))
                      }
                    >
                      <Text
                        style={[
                          styles.branchButtonText,
                          newTeacher?.brans === branch && styles.selectedBranchButtonText,
                        ]}
                      >
                        {branch}
                      </Text>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text style={styles.noBranchesText}>{t('brans_yuklenecek')}</Text>
                )}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>{t('baslangic_durumu')}</Text>
              <View style={styles.statusGrid}>
                {[t('nobetci'), 'Derste', 'İzinli'].map((status) => (
                  <TouchableOpacity
                    key={status}
                    style={[
                      styles.modalStatusButton,
                      { backgroundColor: statusColors[status] || '#ccc' },
                      newTeacher?.durum === status &&
                        styles.selectedModalStatusButton,
                    ]}
                    onPress={() =>
                      setNewTeacher((prev) => ({ ...prev, durum: status }))
                    }
                  >
                    <Text style={styles.modalStatusButtonText}>{status}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity 
              style={[
                styles.addButton,
                (!newTeacher?.ad || !newTeacher?.brans) && styles.disabledButton
              ]} 
              onPress={onAdd}
              disabled={!newTeacher?.ad || !newTeacher?.brans} 
            >
              <Ionicons name="person-add" size={20} color="#fff" />
              <Text style={styles.addButtonText}>{t('ogretmen_ekle')}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddTeacherModal;
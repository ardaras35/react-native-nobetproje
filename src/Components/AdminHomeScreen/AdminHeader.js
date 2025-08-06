import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles/AdminHeaderStyle';

const AdminHeader = ({ onShowStats, onSave }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>Admin Panel</Text>

      <View style={styles.headerActions}>
        <TouchableOpacity onPress={onShowStats} style={styles.headerButton}>
          <Ionicons name="stats-chart" size={20} color="#007AFF" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onSave} style={styles.saveButton}>
          <Ionicons name="save" size={16} color="#fff" />
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminHeader;
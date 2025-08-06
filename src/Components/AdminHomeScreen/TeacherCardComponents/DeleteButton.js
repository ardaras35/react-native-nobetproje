import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DeleteButton = ({ onDelete, styles }) => {
  return (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={onDelete}
    >
      <Ionicons name="trash-outline" size={16} color="#fff" />
      <Text style={styles.deleteButtonText}>{t('ogretmeni_sil')}</Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;
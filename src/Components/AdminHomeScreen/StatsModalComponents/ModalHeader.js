import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ModalHeader = ({ title, onClose, styles }) => {
  return (
    <View style={styles.modalHeader}>
      <Text style={styles.modalTitle}>{title}</Text>
      <TouchableOpacity onPress={onClose}>
        <Ionicons name="close" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeader;
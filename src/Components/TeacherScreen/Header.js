// Öğretmenler ekranı üst başlık bileşeni: Geri tuşu ve başlık içerir.

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../../styles/TeachersScreenStyle';

const Header = ({ onBack }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBack}>
        <MaterialIcons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.header}>Öğretmenlerimiz</Text>
      <View style={{ width: 24 }} /> {/* Sağ boşluk dengelemesi */}
    </View>
  );
};

export default Header;

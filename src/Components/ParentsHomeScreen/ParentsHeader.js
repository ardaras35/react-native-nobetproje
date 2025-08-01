// ParentsHome ekranı üst başlık bileşeni: geri tuşu, "Kat Bilgisi" başlığı bulunmaktadır.

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    elevation: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333',
  },
});

const ParentsHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.header}>Kat Bilgisi</Text>
      <View style={{ width: 24 }} /> {/* Spacer */}
    </View>
  );
};

export default ParentsHeader;

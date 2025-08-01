// Header.js
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../TeacherScreen/Styles/HeaderStyle';

const Header = ({ onBack }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBack}>
        <MaterialIcons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.header}>Öğretmenlerimiz</Text>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default Header;
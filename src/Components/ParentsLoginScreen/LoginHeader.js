import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/LoginHeaderStyle';

const LoginHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.headerTitle}>Geri Dön</Text>

      <View style={styles.spacer} />
    </View>
  );
};

export default LoginHeader;

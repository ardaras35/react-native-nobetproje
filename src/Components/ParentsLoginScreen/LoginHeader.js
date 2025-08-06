import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/LoginHeaderStyle';

const LoginHeader = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{t('geri_don')}</Text>

      <View style={styles.spacer} />
    </View>
  );
};

export default LoginHeader;
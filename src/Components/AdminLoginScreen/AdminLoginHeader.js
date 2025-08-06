//  Yönetici giriş ekranı üst başlığı: geri tuşu, başlık metni, boş spacer alan bulunmaktadır.

import { View, Text, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/AdminLoginHeaderStyle';

const AdminLoginHeader = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </Pressable>
      <Text style={styles.headerTitle}>{t('geri_don')}</Text>
      <View style={styles.headerSpacer} />
    </View>
  );
};

export default AdminLoginHeader;
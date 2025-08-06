// Filtrelenmiş öğretmen sayısını gösterir ve "Yeni Ekle" butonunu içerir.
// Admin Panel ekranında öğretmen kartlarının hemen üstünde yer alır.
// Kullanıcı yeni bir öğretmen eklemek istediğinde modal tetiklenir.
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/ResultsHeaderStyle';

const ResultsHeader = ({ count, onAdd }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.resultsHeader}>
      <Text style={styles.resultsText}>{count} {t('ogretmen_gosteriliyor')}</Text>

      <TouchableOpacity onPress={onAdd} style={styles.addTeacherButton}>
        <Ionicons name="add" size={20} color="#007AFF" />
        <Text style={styles.addTeacherButtonText}>{t('yeni_ekle')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultsHeader;
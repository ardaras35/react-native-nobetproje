import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const TeacherDetails = ({ teacher, styles }) => {
  const { t } = useTranslation();

  return (
    <View>
      <Text style={styles.detail}>
        {t('telefon')}: {teacher?.telefon}
      </Text>
      <Text style={styles.detail}>
        {t('durum')}: {teacher?.durum || t('bilinmeyen_durum')}
      </Text>
    </View>
  );
};

export default TeacherDetails;
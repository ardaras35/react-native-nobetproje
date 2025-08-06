import { View, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getTeacherImage } from '../../../utils/imageMap';

const TeacherProfileSection = ({ teacher, styles }) => {
  const { t } = useTranslation();
  const imageSource = getTeacherImage(teacher.image);
  
  const statusColors = {
    [t('nobetci')]: '#040704ff',
    [t('derste')]: '#2196F3',
    [t('izinli')]: '#FF9800'
  };

  return (
    <>
      <Image source={imageSource} style={styles.image} />
      
      <Text style={styles.name}>{teacher?.ad}</Text>
      <Text style={styles.branch}>{teacher?.brans}</Text>
      
      <View style={styles.statusContainer}>
        <View 
          style={[
            styles.statusDot, 
            { backgroundColor: statusColors[teacher.durum] || '#ccc' }
          ]} 
        />
        <Text style={styles.statusText}>{teacher?.durum || t('bilinmeyen_durum')}</Text>
      </View>

      <Text style={styles.detail}>
        {t('kat')}: {teacher?.kat ? `${teacher.kat}. ${t('kat')}` : t('atanmamis')}
      </Text>
      
      {teacher?.telefon && (
        <Text style={styles.detail}>{t('telefon')}: {teacher.telefon}</Text>
      )}
    </>
  );
};

export default TeacherProfileSection;
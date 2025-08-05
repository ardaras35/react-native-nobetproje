import { View, Text, Image } from 'react-native';
import { getTeacherImage } from '../../../utils/imageMap';
const TeacherProfileSection = ({ teacher, styles }) => {
  const imageSource = getTeacherImage(teacher.image);
  
  const statusColors = {
    'Nöbetçi': '#4CAF50',
    'Derste': '#2196F3',
    'İzinli': '#FF9800'
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
        <Text style={styles.statusText}>{teacher?.durum || 'Bilinmiyor'}</Text>
      </View>

      <Text style={styles.detail}>
        Kat: {teacher?.kat ? `${teacher.kat}. Kat` : 'Atanmamış'}
      </Text>
      
      {teacher?.telefon && (
        <Text style={styles.detail}>Telefon: {teacher.telefon}</Text>
      )}
    </>
  );
};

export default TeacherProfileSection;
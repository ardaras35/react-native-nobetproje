import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getTeacherImage } from '../../utils/imageMap';
import styles from './Styles/TeacherCardStyle';

const TeacherCard = ({ teacher, updateStatus, updateFloor, removeTeacher }) => {
  const statusColors = {
    'Nöbetçi': '#4CAF50',
    'Derste': '#2196F3',
    'İzinli': '#FF9800'
  };

  const handleDeletePress = () => {
    Alert.alert(
      'Öğretmeni Sil',
      `${teacher.ad} adlı öğretmeni silmek istediğinizden emin misiniz?`,
      [
        { text: 'İptal', style: 'cancel' },
        { text: 'Sil', style: 'destructive', onPress: () => removeTeacher(teacher.id) }
      ]
    );
  };

  const imageSource = getTeacherImage(teacher.image);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.teacherInfo}>
          <Image source={imageSource} style={styles.avatar} />
          <View style={styles.teacherDetails}>
            <Text style={styles.teacherName}>{teacher.ad}</Text>
            <Text style={styles.teacherBranch}>{teacher.brans}</Text>
            <View style={styles.statusBadge}>
              <View 
                style={[
                  styles.statusDot, 
                  { backgroundColor: statusColors[teacher.durum] || '#ccc' }
                ]} 
              />
              <Text style={styles.statusText}>{teacher.durum}</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.floorBadge}>
          <Text style={styles.floorText}>
            {teacher.kat ? `${teacher.kat}. Kat` : 'Kat Yok'}
          </Text>
        </View>
      </View>

      <View style={styles.actionSection}>
        <Text style={styles.sectionTitle}>Durum Değiştir</Text>
        <View style={styles.statusButtons}>
          {['Nöbetçi', 'Derste', 'İzinli'].map((status) => (
            <TouchableOpacity
              key={status}
              style={[
                styles.statusButton,
                { backgroundColor: statusColors[status] },
                teacher.durum === status && styles.activeStatusButton,
              ]}
              onPress={() => updateStatus(teacher.id, status)}
            >
              <Text style={styles.statusButtonText}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Kat Ata</Text>
        <View style={styles.floorButtons}>
          {[1, 2, 3, 4, 5].map((floor) => {
            const isActive = teacher.kat === floor;
            const isDisabled = teacher.durum === 'Derste' || teacher.durum === 'İzinli';
            
            return (
              <TouchableOpacity
                key={floor}
                style={[
                  styles.floorButton,
                  isActive && styles.activeFloorButton,
                  isDisabled && styles.disabledButton,
                ]}
                onPress={() => updateFloor(teacher.id, floor)}
                disabled={isDisabled}
              >
                <Text style={[
                  styles.floorButtonText,
                  isActive && styles.activeFloorButtonText,
                ]}>
                  {floor}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={styles.deleteButton} onPress={handleDeletePress}>
          <Ionicons name="trash" size={16} color="#fff" />
          <Text style={styles.deleteButtonText}>Öğretmeni Sil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeacherCard;
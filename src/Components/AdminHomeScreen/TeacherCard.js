import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/TeacherCardStyle';
import { getTeacherImage } from '../../utils/imageMap'; 

const statusColors = {
  'Nöbetçi': '#4CAF50',
  'Derste': '#2196F3',
  'İzinli': '#FF9800',
  'Atanmadı': '#9E9E9E'
};

const TeacherCard = ({
  teacher,
  updateStatus,
  updateFloor,
  removeTeacher
}) => {
  const img = getTeacherImage(teacher.image);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.teacherInfo}>
          <Image source={img} style={styles.avatar} />

          <View style={styles.teacherDetails}>
            <Text style={styles.teacherName}>{teacher.ad}</Text>
            <Text style={styles.teacherBranch}>{teacher.brans}</Text>
            <View style={styles.statusBadge}>
              <View style={[styles.statusDot, { backgroundColor: statusColors[teacher.durum] }]} />
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
        <Text style={styles.sectionTitle}>Durum Güncelle</Text>
        <View style={styles.statusButtons}>
          {['Nöbetçi', 'Derste', 'İzinli'].map((status) => (
            <TouchableOpacity
              key={status}
              style={[
                styles.statusButton,
                { backgroundColor: statusColors[status] },
                teacher.durum === status && styles.activeStatusButton
              ]}
              onPress={() => updateStatus(teacher.id, status)}
            >
              <Text style={styles.statusButtonText}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Kat Ataması</Text>
        <View style={styles.floorButtons}>
          {[1, 2, 3, 4, 5].map((floor) => (
            <TouchableOpacity
              key={floor}
              style={[
                styles.floorButton,
                teacher.kat === floor && styles.activeFloorButton,
                (teacher.durum === 'İzinli' || teacher.durum === 'Derste') && styles.disabledButton
              ]}
              onPress={() => updateFloor(teacher.id, floor)}
              disabled={teacher.durum === 'İzinli' || teacher.durum === 'Derste'}
            >
              <Text
                style={[
                  styles.floorButtonText,
                  teacher.kat === floor && styles.activeFloorButtonText
                ]}
              >
                {floor}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeTeacher(teacher.id)}
        >
          <Ionicons name="trash-outline" size={16} color="#fff" />
          <Text style={styles.deleteButtonText}>Öğretmeni Sil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeacherCard;
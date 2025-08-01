//  Bir katın tüm bilgisini gösteren kart bileşeni: Kat adı, katta nöbetçi 2 öğretmen, okulun açık/kapalı durumuna göre bilgilendirme bulunmaktadır.

import { View, Text, Alert, Image, TouchableOpacity } from 'react-native';
import imageMap from '../../utils/imageMap';
import styles from '../../styles/ParentsHomeScreenStyle';

const FloorCard = ({
  floorNumber,
  teachers,
  now,
  isSchoolOpen,
  currentSlot,
  minutesToNextClass,
  minutesToNextBreak,
}) => {
  const floorTeachers = teachers.filter(
    t => t.kat === floorNumber && t.durum !== 'İzinli'
  );

  const [left, right] = [floorTeachers[0], floorTeachers[1]];

  let timerText = '';
  const hour = now.getHours();
  const isWeekend = [0, 6].includes(now.getDay());

  if (!isSchoolOpen) {
    if (isWeekend) {
      timerText = 'Okulumuz hafta sonu kapalıdır.';
    } else if (hour < 9) {
      timerText = 'Okulumuz henüz açılmadı.';
    } else {
      timerText = 'Okulumuz kapalıdır.';
    }
  } else {
    if (!currentSlot) {
      timerText = minutesToNextClass !== null
        ? `Derse başlamak için ${minutesToNextClass} dakika kaldı.`
        : 'Ders programı yükleniyor...';
    } else if (currentSlot.type === 'class') {
      timerText = minutesToNextBreak !== null
        ? `Teneffüse ${minutesToNextBreak} dakika kaldı.`
        : 'Ders devam ediyor.';
    } else if (currentSlot.type === 'break') {
      timerText = minutesToNextClass !== null
        ? `Derse ${minutesToNextClass} dakika kaldı.`
        : 'Teneffüs zamanı.';
    } else if (currentSlot.type === 'lunch') {
      timerText = minutesToNextClass !== null
        ? `Öğle arasındadır, derse ${minutesToNextClass} dakika kaldı.`
        : 'Öğle arası.';
    }
  }

  const renderTeacher = (teacher, idx) => {
    const key = teacher
      ? `teacher-${floorNumber}-${teacher.id}`
      : `empty-${floorNumber}-${idx}`;

    if (!teacher) {
      return (
        <View key={key} style={styles.teacherInfo}>
          <Text>---</Text>
        </View>
      );
    }

    const imageKey = teacher?.image?.replace('.png', '');
    const img = imageMap[imageKey] ?? require('../../../assets/default.png');

    return (
      <TouchableOpacity
        key={key}
        style={styles.teacherInfo}
        onPress={() =>
          Alert.alert(
            'Öğretmen Bilgisi',
            `${teacher.ad}\n${teacher.brans}\nDurum: ${teacher.durum}`
          )
        }
      >
        <Image source={img} style={styles.avatar} />
        <Text style={styles.name}>{teacher.ad}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.floorCard}>
      <Text style={styles.floorTitle}>{floorNumber}. Kat</Text>
      <View style={styles.teacherRow}>
        {[left, right].map((t, i) => renderTeacher(t, i))}
      </View>
      <Text style={styles.timerText}>{timerText}</Text>
    </View>
  );
};

export default FloorCard;

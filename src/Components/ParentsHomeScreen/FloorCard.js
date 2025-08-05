import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/FloorCardStyle';

// Import edilen componentler
import TeacherRow from './FloorCardComponents/TeacherRow';
import SchoolTimer from './FloorCardComponents/SchoolTimer';

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

  return (
    <View style={styles.floorCard}>
      <Text style={styles.floorTitle}>{floorNumber}. Kat</Text>
      
      <TeacherRow 
        teachers={floorTeachers}
        floorNumber={floorNumber}
        styles={styles}
      />
      
      <SchoolTimer
        now={now}
        isSchoolOpen={isSchoolOpen}
        currentSlot={currentSlot}
        minutesToNextClass={minutesToNextClass}
        minutesToNextBreak={minutesToNextBreak}
        styles={styles}
      />
    </View>
  );
};

export default FloorCard;
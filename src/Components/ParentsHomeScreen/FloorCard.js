import { View } from 'react-native';
import styles from './Styles/FloorCardStyle';

import FloorCardHeader from './FloorCardComponents/FloorCardHeader';
import TeacherRow from './FloorCardComponents/TeacherRow';
import SchoolTimer from './FloorCardComponents/SchoolTimer';
import TeacherFilterHelper from './FloorCardComponents/TeacherFilterHelper';

const FloorCard = ({
  floorNumber,
  teachers,
  now,
  isSchoolOpen,
  currentSlot,
  minutesToNextClass,
  minutesToNextBreak,
}) => {
  const floorTeachers = TeacherFilterHelper.getFloorTeachers(teachers, floorNumber);

  return (
    <View style={styles.floorCard}>
      <FloorCardHeader 
        floorNumber={floorNumber}
        styles={styles}
      />
      
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
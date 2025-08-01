// Tüm katları listeleyen bileşen: her kat için FloorCard render eder.

import { FlatList } from 'react-native';
import FloorCard from './FloorCard';
import styles from './Styles/FloorListStyle';

const FloorList = ({
  teachers,
  now,
  isSchoolOpen,
  currentSlot,
  minutesToNextClass,
  minutesToNextBreak,
}) => {
  const renderItem = ({ item }) => (
    <FloorCard
      floorNumber={item}
      teachers={teachers}
      now={now}
      isSchoolOpen={isSchoolOpen}
      currentSlot={currentSlot}
      minutesToNextClass={minutesToNextClass}
      minutesToNextBreak={minutesToNextBreak}
    />
  );

  return (
    <FlatList
      data={[5, 4, 3, 2, 1]} // Katlar
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

export default FloorList;

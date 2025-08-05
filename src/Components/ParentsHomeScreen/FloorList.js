import React, { useMemo } from 'react';
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
  
  const floors = useMemo(() => [5, 4, 3, 2, 1], []);

  const renderFloorCard = ({ item }) => (
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
      data={floors}
      renderItem={renderFloorCard}
      keyExtractor={(item) => `floor-${item}`}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={true}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      windowSize={10}
    />
  );
};

export default FloorList;
// Tüm öğretmenleri listeleyen bileşen: FlatList ile 2 kolonda öğretmen kartlarını render eder.

import { FlatList } from 'react-native';
import styles from '../../styles/TeachersScreenStyle';
import TeachersCard from './TeachersCard';

const TeachersList = ({ teachers, openModal }) => {
  const renderItem = ({ item }) => (
    <TeachersCard teacher={item} onPress={() => openModal(item)} />
  );

  return (
    <FlatList
      data={teachers}
      key={'2-columns'}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 }}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default TeachersList;

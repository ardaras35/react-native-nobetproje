// Tüm öğretmenleri listeleyen bileşen: FlatList ile 2 kolonda öğretmen kartlarını render eder.

import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/TeacherListStyle';
import TeacherCard from './TeacherCard';

const TeachersList = ({ teachers, openModal }) => {
 const renderItem = ({ item }) => (
   <TeacherCard teacher={item} 
   onPress={() => openModal(item)} />
 );

 return (
   <FlatList
     data={teachers}
     renderItem={renderItem}
     keyExtractor={(item) => item.id.toString()}
     numColumns={2}
     columnWrapperStyle={styles.columnWrapper}
     contentContainerStyle={styles.listContainer}
   />
 );
};

export default TeachersList;
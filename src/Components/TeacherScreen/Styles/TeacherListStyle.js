import { StyleSheet } from 'react-native';

const TeachersListStyle = StyleSheet.create({
  // FlatList container styling
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 30,
    flexGrow: 1,
  },

  // Column wrapper (satır styling)
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});

export default TeachersListStyle;
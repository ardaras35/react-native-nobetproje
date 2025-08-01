import { StyleSheet, Platform } from 'react-native';

const TeachersHeaderStyle = StyleSheet.create({
  // Ana header container
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Safe area için padding
    paddingTop: Platform.OS === 'ios' ? 50 : 15,
  },

  // Header başlık
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 15,
  },
});

export default TeachersHeaderStyle;
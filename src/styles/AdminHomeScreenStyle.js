// AdminHomeScreen Style
import { StyleSheet } from 'react-native';

const AdminHomeScreenStyle = StyleSheet.create({
  // Ana container
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // Arama section container  
  searchSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  // Arama kutusu container
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },

  // Arama ikonu
  searchIcon: {
    marginRight: 10,
  },

  // Arama input
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 0, // Android için gereksiz padding'i kaldır
  },

  // Liste container
  listContainer: {
    paddingBottom: 20,
    flexGrow: 1,
  },
});

export default AdminHomeScreenStyle;
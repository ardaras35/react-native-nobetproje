import { StyleSheet } from 'react-native';

const SearchAndFilterBarStyle = StyleSheet.create({
  // Ana search section container
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

  // Filtreler container (horizontal scroll)
  filtersContainer: {
    marginBottom: 10,
  },

  // Filter button (genel)
  filterButton: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#e9ecef',
    minWidth: 70,
    alignItems: 'center',
  },

  // Active filter button (durum filtreleri için)
  activeFilterButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },

  // Active floor filter button (kat filtreleri için)
  activeFloorFilterButton: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },

  // Filter button text (genel)
  filterButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    textAlign: 'center',
  },

  // Active filter button text (durum filtreleri için)
  activeFilterButtonText: {
    color: '#fff',
    fontWeight: '600',
  },

  // Active floor filter button text (kat filtreleri için)
  activeFloorFilterButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default SearchAndFilterBarStyle;
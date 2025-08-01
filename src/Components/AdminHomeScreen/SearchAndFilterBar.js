// Admin Paneli: arama ve filtreleme çubuğu bileşeni bulunmaktadır.

import { View, TextInput, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/AdminHomeScreenStyle'; 

const SearchAndFilterBar = ({
  searchText,
  setSearchText,
  filterOptions,
  selectedFilter,
  setSelectedFilter,
  floorOptions,
  selectedFloorFilter,
  setSelectedFloorFilter,
}) => {
  return (
    <View style={styles.searchSection}>
      {/* Arama Kutusu */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Öğretmen ara..."
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText ? (
          <TouchableOpacity onPress={() => setSearchText('')}>
            <Ionicons name="close-circle" size={20} color="#666" />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Durum Filtreleri */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        {filterOptions.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.activeFilterButton,
            ]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedFilter === filter && styles.activeFilterButtonText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Kat Filtreleri */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        {floorOptions.map((floor) => (
          <TouchableOpacity
            key={floor}
            style={[
              styles.filterButton,
              selectedFloorFilter === floor && styles.activeFloorFilterButton,
            ]}
            onPress={() => setSelectedFloorFilter(floor)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedFloorFilter === floor && styles.activeFloorFilterButtonText,
              ]}
            >
              {floor}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchAndFilterBar;

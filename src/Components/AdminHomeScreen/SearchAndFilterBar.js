import { View, TextInput, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/SearchAndFilterBarStyle';

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
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Öğretmen ara..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
      >
        {filterOptions.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.activeFilterButton,
            ]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text style={[
              styles.filterButtonText,
              selectedFilter === filter && styles.activeFilterButtonText,
            ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
      >
        {floorOptions.map((floor) => (
          <TouchableOpacity
            key={floor}
            style={[
              styles.filterButton,
              selectedFloorFilter === floor && styles.activeFloorFilterButton,
            ]}
            onPress={() => setSelectedFloorFilter(floor)}
          >
            <Text style={[
              styles.filterButtonText,
              selectedFloorFilter === floor && styles.activeFloorFilterButtonText,
            ]}>
              {floor}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchAndFilterBar;
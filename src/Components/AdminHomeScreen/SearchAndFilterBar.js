import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/SearchAndFilterBarStyle';

import SearchInput from './SearchAndFilterBarComponents/SearchInput';
import FilterChips from './SearchAndFilterBarComponents/FilterChips';

const SearchAndFilterBar = ({
  searchText,
  setSearchText,
  filterOptions = [],
  selectedFilter,
  setSelectedFilter,
  floorOptions = [],
  selectedFloorFilter,
  setSelectedFloorFilter,
}) => {
  const { t } = useTranslation();
  return (
    <View style={styles.searchSection}>
      
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        placeholder={t('ogretmen_ara')}
        styles={styles}
      />

      <FilterChips
        options={filterOptions}
        selectedOption={selectedFilter}
        setSelectedOption={setSelectedFilter}
        styles={styles}
        activeButtonStyle="activeFilterButton"
        activeTextStyle="activeFilterButtonText"
      />

      <FilterChips
        options={floorOptions}
        selectedOption={selectedFloorFilter}
        setSelectedOption={setSelectedFloorFilter}
        styles={styles}
        activeButtonStyle="activeFloorFilterButton"
        activeTextStyle="activeFloorFilterButtonText"
      />

    </View>
  );
};

export default SearchAndFilterBar;

import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const FilterChips = ({ 
  options = [], 
  selectedOption, 
  setSelectedOption, 
  styles,
  activeButtonStyle = 'activeFilterButton',
  activeTextStyle = 'activeFilterButtonText'
}) => {
  if (!options || options.length === 0) return null;

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.filtersContainer}
    >
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.filterButton,
            selectedOption === option && styles[activeButtonStyle],
          ]}
          onPress={() => setSelectedOption(option)}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedOption === option && styles[activeTextStyle],
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FilterChips;
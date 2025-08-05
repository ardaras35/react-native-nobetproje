import React, { useRef } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchInput = ({ searchText, setSearchText, placeholder = "Ara...", styles }) => {
  const inputRef = useRef(null);

  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
      <TextInput
        ref={inputRef}
        style={styles.searchInput}
        placeholder={placeholder}
        value={searchText}
        onChangeText={setSearchText}
        blurOnSubmit={false}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="search"
        textContentType="none"
        autoComplete="off"
        spellCheck={false}
        selectTextOnFocus={false}
      />
      {searchText ? (
        <TouchableOpacity onPress={() => setSearchText('')}>
          <Ionicons name="close-circle" size={20} color="#666" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SearchInput;
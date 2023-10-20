// SearchBar.jsx
import React from "react";
import { View, TextInput} from "react-native";
import tw from "twrnc";

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (text) => {
    onSearch(text); // Call the onSearch function with the search text
  };

  return (
    <View style={tw`bg-white w-84 rounded-full shadow-sm my-8 mx-auto`}>
      <TextInput
        style={tw`flex-1 p-3 bg-white rounded-xl`}
        placeholder="Search..."
        placeholderTextColor="#888"
        onChangeText={handleSearchChange}
      />
    </View>
  );
};

export default SearchBar;


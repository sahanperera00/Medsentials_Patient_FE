// SearchBar.jsx
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import tw from "twrnc";

const SearchBar = () => {
  
  const [query, setQuery] = useState("");

  return (
    <View style={tw`flex-row items-center p-4`}>
      <TextInput
        style={tw`flex-1 ml-2 mt-5 p-3 bg-white rounded-full max-w-sm`}
        placeholder="Search..."
        placeholderTextColor="#888" // Set a placeholder text color
        // value={query}
        // onChangeText={setQuery}
      />

      
    </View>
  );
};

export default SearchBar;

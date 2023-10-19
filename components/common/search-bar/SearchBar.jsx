import { View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./searchbar.style";
import { icons } from "../../../constants";

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (text) => {
    onSearch(text); // Call the onSearch function with the search text
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          placeholderTextColor="black"
          onChangeText={handleSearchChange} // Call handleSearchChange on text input change
        />
      </View>
      <TouchableOpacity style={styles.searchBtn}>
        <Image source={icons.search} style={styles.searchBtnImage} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

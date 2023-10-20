import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from ".././common/lists/cardlist/cardlist.style"; // Use your own styles
import tw from "twrnc"; // Use your own utility library
import CategoryCard from "./DocCategoriesSingleCard"; // Import your CategoryCard component
import SearchBar from "../../components/searchbar/SearchBar";

// Define a list of categories
const categories = [
    { name: "Gynecology" ,imageSource: require("../../assets/images/doctorsCats/gyno.png")},
    { name: "Pediatrics",imageSource: require("../../assets/images/doctorsCats/ped.png") },
    { name: "Neurology",imageSource: require("../../assets/images/doctorsCats/neuro.png") },
    { name: "Orthopedics" ,imageSource: require("../../assets/images/doctorsCats/orth.png")},
    { name: "Cardiology",imageSource: require("../../assets/images/doctorsCats/cardio.png") },
    { name: "Dermatology",imageSource: require("../../assets/images/doctorsCats/derm.png") },
    { name: "Urology" ,imageSource: require("../../assets/images/doctorsCats/rro.png")},
    { name: "Oncology" ,imageSource: require("../../assets/images/doctorsCats/onco.png")},
    { name: "ENT (Ear, Nose, and Throat)",imageSource: require("../../assets/images/doctorsCats/ent.png") },
    { name: "Dentistry" ,imageSource: require("../../assets/images/doctorsCats/orth.png")},
    { name: "Psychiatry" ,imageSource: require("../../assets/images/doctorsCats/orth.png")},
    // Add more categories as needed
  ];
  

const DocCategoriesList = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Function to handle category selection
  const handleSelectCategory = (category) => {
    // Implement navigation to the category-specific page here
    // Example: router.push(`/categoryDetails/${category}`);
  };

  // You can add a filter logic for categories similar to what you did for doctors

  return (
    <ScrollView stickyHeaderHiddenOnScroll={4}>
      <SearchBar onSearch={setSearch} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View key={index} style={tw`w-85 rounded-md shadow-md my-1 mx-auto`}>
              <CategoryCard
                category={category.name}
                imageSource={category.imageSource}
                handleSelectCategory={handleSelectCategory}
              />
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default DocCategoriesList;


import { View, Text, TextInput, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import styles from ".././common/lists/cardlist/cardlist.style";
import tw from "twrnc";
import DoctorCard from "./DoctorSingleCard.jsx";
import { doctors } from "../../assets/dummy/datadoc";
import SearchBar from "../common/search-bar/SearchBar.jsx";

// ...

const DoctorList = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const handleNavigate = (id) => {
    router.push(`/DoctorAppointments/${id}`);
  };

  return (
    <ScrollView stickyHeaderHiddenOnScroll={4}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {/* SEARCH BAR IMPLEMENTATION */}
          <SearchBar
            onSearch={setSearch} // Pass setSearch as a prop to the SearchBar
          />
        </View>
        <View>
          <Text style={tw`text-lg my-5 mx-5 font-bold`}>Choose the Doctor</Text>
        </View>
        {doctors
          .filter(
            (data) =>
              data.name.includes(search) ||
              data.specialization.includes(search) ||
              data.location.includes(search)
          )
          .map((data, index) => {
            return (
              <View
                key={index}
                style={tw`bg-white w-95/100 rounded-md shadow-md my-1 mx-auto`}
              >
                <DoctorCard data={data} handleNavigate={handleNavigate} />
              </View>
            );
          })}
      </ScrollView>
    </ScrollView>
  );
};

// ...

export default DoctorList;

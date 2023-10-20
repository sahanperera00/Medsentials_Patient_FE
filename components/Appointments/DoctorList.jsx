import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from ".././common/lists/cardlist/cardlist.style";
import tw from "twrnc";
import DoctorCard from "./DoctorSingleCard.jsx";
import { doctors } from "../../assets/dummy/datadoc";
import SearchBar from '../../components/searchbar/SearchBar';

const DoctorList = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleNavigate = (id) => {
    router.push(`/doctorDetails/${id}`);
  };

  // Filter doctors by specialization
  const filteredDoctors = doctors.filter((data) =>
    data.specialization.includes(search)
  );

  return (
    <ScrollView stickyHeaderHiddenOnScroll={4}>
      <SearchBar onSearch={setSearch} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {filteredDoctors.map((data, index) => {
          return (
            <View key={index} style={tw`w-85 rounded-md shadow-md my-1 mx-auto`}>
              <DoctorCard data={data} handleNavigate={handleNavigate} />
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default DoctorList;

import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
//import styles from ".././common/lists/cardlist/cardlist.style";
import tw from "twrnc";
import DoctorCard from "./DoctorSingleCard.jsx";
import { doctors } from "../../assets/dummy/datadoc";
import SearchBar from "../../components/searchbar/SearchBar";

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
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={tw`flex-1 mt-1 mb-28`}
    >
      <View style={tw`border-b border-purple-400 mx-4`}>
        <SearchBar onSearch={setSearch} />
      </View>

      <ScrollView style={tw`mx-4 mt-5`} showsVerticalScrollIndicator={false}>
        {filteredDoctors.map((data, index) => {
          return (
            <View
              key={index}
              style={tw`bg-white w-100/100 rounded-xl shadow-sm my-1 mx-auto`}
            >
              <DoctorCard data={data} handleNavigate={handleNavigate} />
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default DoctorList;

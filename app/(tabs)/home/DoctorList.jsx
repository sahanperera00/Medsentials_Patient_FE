import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../../components/common/lists/cardlist/cardlist.style";
import tw from "twrnc";
import DoctorCard from "../../../components/Appointments/DoctorSingleCard.jsx";
import { doctors } from "../../../assets/dummy/datadoc.js";
import SearchBar from "../../../components/searchbar/SearchBar.jsx";

const DoctorList = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleNavigate = (id) => {
    router.push(`/doctorDetails/${id}`);
  };

  // Filter doctors by specialization
  const filteredDoctors = doctors.filter(
    (data) =>
      data.specialization.includes(search) ||
      data.name.includes(search) ||
      data.location.includes(search)
  );

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={tw`flex-1 mt-1 mb-28`}
    >
      <View style={tw`flex-1 items-center mt-18`}>
        <Text style={tw`text-3xl text-center font-bold`}>
          Choose Your Doctor
        </Text>
      </View>
      <View style={tw`border-b border-purple-400 mx-5`}>
        <SearchBar onSearch={setSearch} />
      </View>

      <ScrollView style={styles.scrollView}>
        {filteredDoctors.map((data, index) => {
          return (
            <View
              key={index}
              // style={tw`bg-white w-100/100 rounded-xl shadow-sm my-1 mx-auto`}
              style={tw` w-85 rounded-md shadow-md my-1 mx-auto`}
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

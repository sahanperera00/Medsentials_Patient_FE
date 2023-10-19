import { View, Text, TextInput, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import styles from ".././common/lists/cardlist/cardlist.style";
import tw from "twrnc";
import AppointmentCard from "./AppointmentSingleCard.jsx";
import { appointments } from "../../assets/dummy/appointments";
import SearchBar from '../../components/searchbar/SearchBar';
// ...

const AppointmentList = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");

  

  return (
    <ScrollView stickyHeaderHiddenOnScroll={4}>
      <SearchBar onSearch={setSearch} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        
        
        <View>
        
       
        {appointments
          .filter(
            (data) =>
              data.doctorName.includes(search) 
             
          )
          .map((data, index) => {
            return (
              <View
                key={index}
                style={tw` w-85 rounded-md shadow-md my-1 mx-auto`}
              >
                <AppointmentCard data={data}  />
              </View>
            );
          })}
           </View>
      </ScrollView>
    </ScrollView>
  );
};

// ...

export default AppointmentList;

import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import SearchBar from '../../../components/searchbar/SearchBar';
import { prescriptions } from '../../../assets/dummy/data';
import PrescriptionCard from '../../../components/prescriptions/PrescriptionCard';

const MyPrescriptions = () => {

  const [searchData, setSearchData] = useState();
  const router = useRouter();

  const [pres, setPres] = useState([]);

  const getPrescriptions = () => {
    const response = prescriptions;
    setPres(response);
  }


  useEffect(() => {
    getPrescriptions();
    console.log(pres);
  }, [])

  return (
    <ScrollView style={tw`flex-1 mt-10 mb-28`}>
      <View style={tw`flex-1 ml-5 mt-10`}>
        <Text style={tw`text-3xl font-bold`}>
          Your Prescriptions
        </Text>
      </View>

      {/* SEARCH BAR IMPLEMENTATION */}
      <View style={tw`border-b border-purple-400 mx-4`}>
        <SearchBar onSearch={setSearchData} />
      </View>

      <ScrollView style={tw`mx-4 mt-5`}>
        {pres.map((prescription, index) => {
          console.log(prescription);
          return (
            <View key={index} style={tw`bg-white w-100/100 rounded-xl shadow-sm my-1 mx-auto`}>
              <PrescriptionCard data={prescription} handleTap={() => router.push(`/profile/prescriptionDetails/${prescription._id}`)} />
            </View>
          )
        })}
      </ScrollView>

    </ScrollView>
  )
}

export default MyPrescriptions;
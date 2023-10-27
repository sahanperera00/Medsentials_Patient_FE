import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import SearchBar from '../../../components/searchbar/SearchBar';
import PrescriptionCard from '../../../components/prescriptions/PrescriptionCard';
import usePrescriptions from '../../../hooks/axios-functions/usePrescriptions';

const MyPrescriptions = () => {

  const {getAllPrescriptions} = usePrescriptions(); 
  const router = useRouter();

  const [searchData, setSearchData] = useState('');
  const [pres, setPres] = useState([]);

  const getPrescriptions = async() => {
    const response = await getAllPrescriptions();
    setPres(response);
  }

  useEffect(() => {
    getPrescriptions();
    console.log(pres);
  }, [])

  return (
    <ScrollView keyboardShouldPersistTaps='always' style={tw`flex-1 mt-10 mb-28`}>
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
        {pres.filter((data)=>{
          if(searchData === ''){
            return data;
          }else if(data?.prescriptionId.toString().toLowerCase()?.includes(searchData?.toLowerCase())){
            return data;
          }
        }).map((prescription, index) => {
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

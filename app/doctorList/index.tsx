import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";
import tw from "twrnc";
import DoctorList from "../../components/Appointments/DoctorList";


export default function doctorList() {
  return (
    

<View style={tw`flex-1 items-center mt-18`}>
<Text style={tw`text-3xl text-center font-bold`}>Choose Your Doctor</Text>

<DoctorList />
</View>
  );
}

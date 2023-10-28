import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";
import tw from "twrnc";
import DocCategoriesList from "../../../components/Appointments/DocCategoriesList";


export default function categories() {
  return (
    

<View style={tw`flex-1 items-center mt-18`}>

<Link href="DoctorList">
<Text style={tw`text-3xl text-center font-bold`}>Categories Of Doctors</Text>
     </Link>
    < DocCategoriesList/>
</View>
  );
}

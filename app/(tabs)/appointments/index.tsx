import { View, Text } from "react-native";
import React from "react";
import AppointmentList from "../../../components/Appointments/AppointmentList";
import tw from "twrnc";
import { Link } from "expo-router";

import DoctorList from "../../../components/Appointments/DoctorList";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import SearchBar from "../../../components/searchbar/SearchBar";

export default function appointments() {
  return (
    <View style={tw`flex-1 items-center mt-18`}>
      <Text style={tw`text-3xl text-center font-bold`}>My Appointments</Text>
      <AppointmentList />
    </View>
  );
}

import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";
import tw from "twrnc";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function myPrescriptions() {
  return (
    <View style={tw`flex-1 items-center px-5`}>
      <View style={tw`h-30`} />
      <ExpoStatusBar style="dark" />
      <Text style={tw`text-5xl text-center font-bold`}>My Prescriptions</Text>
      <View style={tw`h-30`} />
      <Link href="/profile/prescriptionDetails/1">
        <Text style={tw`text-2xl text-center font-bold`}>Prescription 1</Text>
      </Link>
      <Link href="/profile/prescriptionDetails/2">
        <Text style={tw`text-2xl text-center font-bold`}>Prescription 2</Text>
      </Link>
    </View>
  );
}

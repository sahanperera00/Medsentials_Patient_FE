import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import Button from "../components/button/Button";
import { router } from "expo-router";

export default function pharmacyDetails() {
  return (
    <View style={tw`flex-1 items-center px-5`}>
      <View style={tw`h-30`} />
      <ExpoStatusBar style="dark" />
      <Text style={tw`text-5xl text-center font-bold`}>Pharmacy Details</Text>
      <View style={tw`h-10`} />
      <Button
        text="Send Prescription"
        onPress={() => {
          router.push("/checkout");
        }}
      />
      {/* <Text style={tw`text-2xl text-center font-bold`}>{data.name}</Text> */}
      <View style={tw`h-5`} />
      {/*<Text style={tw`text-xl text-center`}>{data.description}</Text>
      <View style={tw`h-5`} />
      <Text style={tw`text-xl text-center`}>{data.location}</Text>
      <View style={tw`h-5`} />
      <Text style={tw`text-xl text-center`}>{data.phone}</Text>
      <View style={tw`h-5`} /> */}
    </View>
  );
}

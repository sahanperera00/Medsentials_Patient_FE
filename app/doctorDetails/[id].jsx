import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, Link } from "expo-router";
import tw from "twrnc";

export default function doctorDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={tw`flex-1 items-center px-5`}>
      <View style={tw`h-30`} />
      <Text style={tw`text-5xl text-center font-bold`}>Doctor Details</Text>
      <View style={tw`h-30`} />
      <Link href="/selectDateAndTime">
        <Text style={tw`text-2xl text-center font-bold`}>Payment</Text>
      </Link>
    </View>
  );
}

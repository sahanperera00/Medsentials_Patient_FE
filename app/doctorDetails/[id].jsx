import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import tw from "twrnc";
import Button from "../../components/button/Button";

export default function doctorDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={tw`flex-1 items-center px-5`}>
      <View style={tw`h-30`} />
      <Text style={tw`text-5xl text-center font-bold`}>Doctor Details</Text>
      <View style={tw`h-30`} />
      <View style={tw`flex-1 flex-col w-full gap-5`}>
        <Button
          text="Set Appointment"
          onPress={() => {
            router.push("/selectDateAndTime");
          }}
        />
      </View>
    </View>
  );
}

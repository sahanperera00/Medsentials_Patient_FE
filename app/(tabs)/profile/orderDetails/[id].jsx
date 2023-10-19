import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import Button from "../../../../components/button/Button";
import { router } from "expo-router";

export default function orderDetails() {
  return (
    <View style={tw`flex-1 items-center px-5`}>
      <View style={tw`h-30`} />
      <Text style={tw`text-5xl text-center font-bold`}>
        Prescription Details
      </Text>
      <View style={tw`h-30`} />
      <View style={tw`flex-1 flex-col w-full gap-5`}>
        <Button
          text="Back to My Orders"
          onPress={() => {
            router.push("/profile/myOrders");
          }}
        />
      </View>
    </View>
  );
}

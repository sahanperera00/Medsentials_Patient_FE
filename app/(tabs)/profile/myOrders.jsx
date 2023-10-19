import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";
import tw from "twrnc";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function myOrders() {
  return (
    <View style={tw`flex-1 items-center px-5`}>
      <View style={tw`h-30`} />
      <ExpoStatusBar style="dark" />
      <Text style={tw`text-5xl text-center font-bold`}>My Orders</Text>
      <View style={tw`h-30`} />
      <Link href="/profile/orderDetails/1">
        <Text style={tw`text-2xl text-center font-bold`}>Order 1</Text>
      </Link>
      <Link href="/profile/orderDetails/2">
        <Text style={tw`text-2xl text-center font-bold`}>Order 2</Text>
      </Link>
    </View>
  );
}

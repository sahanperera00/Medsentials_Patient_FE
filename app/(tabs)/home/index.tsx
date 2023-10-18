import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";
import tw from "twrnc";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function home() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <ExpoStatusBar style="dark" />
      <Link href="/home/settings">
        <Text style={tw`text-5xl text-center font-bold`}>Home</Text>
      </Link>
    </View>
  );
}

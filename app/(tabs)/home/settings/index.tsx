import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Stack } from "expo-router";

export default function settings() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <ExpoStatusBar style="dark" />
      <Text style={tw`text-5xl text-center font-bold`}>Settings</Text>
    </View>
  );
}

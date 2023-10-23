import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Button1({ text, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[tw`w-30 py-2 rounded-lg bg-[#7e57c2]`, style]}>
        <Text style={tw`text-white text-center text-sm`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

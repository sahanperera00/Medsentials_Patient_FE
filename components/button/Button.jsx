import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Button({ text, onPress }) {
  return (
    <View style={tw`w-full py-6 rounded-2xl bg-[#7e57c2]`}>
      <Text style={tw`text-white text-center text-5`} onPress={onPress}>
        {text}
      </Text>
    </View>
  );
}

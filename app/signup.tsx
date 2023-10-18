import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { Link } from "expo-router";

export default function signup() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-5xl text-center font-bold`}>Sign Up</Text>
      <Text style={tw`text-xl mt-8`}>
        Already have an account? <Link href="login">Log in</Link>
      </Text>
    </View>
  );
}

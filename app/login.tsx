import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { Link } from "expo-router";

export default function login() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Link href="home">
        <Text style={tw`text-5xl text-center font-bold`}>Login</Text>
      </Link>
      <Text style={tw`text-xl mt-8`}>
        Don't have an account? <Link href="signup">Sign up</Link>
      </Text>
    </View>
  );
}

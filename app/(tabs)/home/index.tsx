import { Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { Link } from "expo-router";
import Button from "../../../components/button/Button";
import { router } from "expo-router";

export default function home() {
  return (
    <ScrollView>
      <View style={tw`flex-1 items-center px-5`}>
        <Text style={tw`text-4xl text-center font-bold`}>Home</Text>
      </View>
      <View style={tw`flex-1 flex-col w-full gap-5`}>
        <Link href="/categories">
          <Text style={tw`text-2xl text-center font-bold`}>Categories</Text>
        </Link>

        <Button
          text="Doctors"
          onPress={() => {
            router.push("/home/DoctorList");
          }}
          style={tw`py-5`}
        />
      </View>
    </ScrollView>
  );
}

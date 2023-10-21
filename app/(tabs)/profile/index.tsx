import { Text, View, ScrollView } from "react-native";
import React, { Component } from "react";
import tw from "twrnc";
import ProfilePicture from "../../../components/profilePicture/ProfilePicture";
import Button from "../../../components/button/Button";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

export default function profile() {
  return (
    <ScrollView>
      <View style={tw`flex-1 items-center px-5`}>
        <View style={tw`h-20`} />
        <ProfilePicture
          imgUrl={
            "https://firebasestorage.googleapis.com/v0/b/surge-internship-march-2023.appspot.com/o/catprofile2.jpg?alt=media&token=55c1e1d1-ca63-41a0-9c49-9be199efcfcc&_gl=1*1l2rr18*_ga*MjA2NDU4MzI2Ny4xNjgxMDU3MTMx*_ga_CW55HF8NVT*MTY5NzY1NzgyNS4yNS4xLjE2OTc2NTc4MzAuNTUuMC4w"
          }
          size={180}
        />
        <View style={tw`my-10`}>
          <Text style={tw`text-4xl text-center font-bold`}>My Profile</Text>
          <Text style={tw`text-xl text-center text-gray-500`}>shaggy__00</Text>
          <Text style={tw`text-xl text-center text-gray-500`}>
            sahanvimukthi00@gmail.com
          </Text>
        </View>
        <View style={tw`flex-1 flex-col w-full gap-5`}>
          <Button text="Edit Profile" onPress={null} />
          <Button
            text="My Prescriptions"
            onPress={() => {
              router.push("/profile/myPrescriptions");
            }}
          />
          <Button
            text="My Orders"
            onPress={() => {
              router.push("/profile/myOrders");
            }}
          />
          <Button
            text="Logout"
            onPress={() => {
              FIREBASE_AUTH.signOut();
              router.push("/login");
            }}
          />
          <Text style={tw`text-center text-gray-400 mb-50`}>
            Powered by Code Crusaders
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

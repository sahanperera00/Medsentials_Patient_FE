import { View, Text } from "react-native";
import React from "react";
import { router } from "expo-router";
import tw from "twrnc";
import Button from "../components/button/Button";
import DeliveryOptionCard from "../components/deliveryOptionCard/deliveryOptionCard";
import { useState } from "react";

export default function deliveryOption() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    {
      type: "delivery",
    },
    {
      type: "pickup",
    },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={tw`flex-1 items-center px-5`}>
      <View style={tw`h-20`} />
      <Text style={tw`text-2xl text-center font-bold`}>Delivery Option</Text>
      <View style={tw`h-15`} />
      <Text style={tw`text-3xl text-left`}>
        Your preferred delivery option for the order?
      </Text>
      <View style={tw`h-15`} />
      {options.map((option) => (
        <DeliveryOptionCard
          key={option.type}
          type={option.type}
          selected={selectedOption === option.type}
          onSelect={handleOptionClick}
        />
      ))}
      <View style={tw`h-15`} />
      <Button
        text="Confirm"
        onPress={() => {
          router.push("/locatePharmacy");
        }}
        disabled={!selectedOption}
      />
    </View>
  );
}

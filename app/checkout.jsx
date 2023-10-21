import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import { router } from "expo-router";
import tw from "twrnc";
import Button from "../components/button/Button";
import PaymentCard from "../components/paymentCard/paymentCard";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const { width } = Dimensions.get("window");

export default function checkout() {
  const [preferredCard, setPreferredCard] = useState(null);

  // const updatePreferredCard = async (card) => {
  //   try {
  //     await AsyncStorage.setItem("preferredCard", card);
  //     setPreferredCard(card);
  //   } catch (error) {
  //     console.error("Error storing preferred card:", error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchPreferredCard = async () => {
  //     try {
  //       const storedPreferredCard = await AsyncStorage.getItem("preferredCard");
  //       if (storedPreferredCard) {
  //         setPreferredCard(storedPreferredCard);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching preferred card:", error);
  //     }
  //   };

  //   fetchPreferredCard();
  // }, []);

  return (
    <ScrollView style={tw`flex-1 px-5`}>
      <View style={tw`h-20`} />
      <Text style={tw`text-2xl text-center font-bold`}>Checkout</Text>
      <View style={tw`h-15`} />
      <ScrollView
        snapToInterval={width}
        decelerationRate="fast"
        alwaysBounceHorizontal={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`gap-5`}
        style={tw`w-full gap-5`}
      >
        <PaymentCard
          style={{
            width: width - 40,
            height: 250,
            borderRadius: 120,
            resizeMode: "contain",
          }}
          isPressed={preferredCard === "card1"}
          onPress={() => setPreferredCard("card1")}
        />
        <PaymentCard
          style={{
            width: width - 40,
            height: 250,
            borderRadius: 120,
            resizeMode: "contain",
          }}
          isPressed={preferredCard === "card2"}
          onPress={() => setPreferredCard("card2")}
        />
      </ScrollView>
      <View style={tw`h-15`} />
      <View style={tw`flex-row items-center justify-center`}>
        <Text style={tw`text-xl text-center`}>Preferred Card: </Text>
        {preferredCard ? (
          <>
            <Text style={tw`text-xl text-center`}>
              {preferredCard === "card1" ? "1" : ""}
            </Text>
            <Text style={tw`text-xl text-center`}>
              {preferredCard === "card2" ? "2" : ""}
            </Text>
          </>
        ) : (
          <Text style={tw`text-xl text-center`}>Select a card</Text>
        )}
      </View>
      <Text style={tw`text-xl text-center`}>
        Dave, Add a summary of you prescription here
      </Text>
      <View style={tw`h-15`} />
      <View style={tw`flex-1 flex-col w-full gap-5`}>
        <Button
          text="Checkout"
          disabled={!preferredCard}
          onPress={() => {
            router.push("/profile/myOrders");
          }}
        />
      </View>
    </ScrollView>
  );
}

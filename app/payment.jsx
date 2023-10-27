import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";
import tw from "twrnc";
import Button from "../components/button/Button";
import { ScrollView, Dimensions } from "react-native";
import { router } from "expo-router";
import PaymentCard from "../components/paymentCard/paymentCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const { width } = Dimensions.get("window");

const Payment = () => {
  const router = useRouter();
  const [totalCharges, setTotalCharges] = useState(1500); // Set the total charges based on your data
  const [preferredCard, setPreferredCard] = useState(null);
  const [cardNumber, setCardNumber] = useState("");

  const handlePayment = () => {
    // Perform payment processing here (integration with a payment gateway)
    // You would need to send the payment details to your server for actual processing

    // After successful payment, you can navigate to the 'appointments' page
    router.push("/appointments");
  };

  return (
    <View style={tw`flex-1 items-center px-5`}>
      <View style={tw`h-20`} />
      <Text style={tw`text-4xl text-center font-bold`}>Payment</Text>

      <View style={tw`h-10`} />

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

      <View style={tw`h-10`} />

      <Text style={tw`text-lg`}>Appointment Charges: {totalCharges} LKR</Text>

      <View style={tw`h-10`} />
      <Button text="Confirm Payment" onPress={handlePayment} />
    </View>
  );
};

export default Payment;

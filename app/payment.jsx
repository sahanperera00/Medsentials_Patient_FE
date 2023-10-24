import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import Button from '../components/button/Button';

const Payment = () => {
  const router = useRouter();
  const [totalCharges, setTotalCharges] = useState(1500); // Set the total charges based on your data

  const [cardNumber, setCardNumber] = useState('');

  const handlePayment = () => {
    // Perform payment processing here (integration with a payment gateway)
    // You would need to send the payment details to your server for actual processing

    // After successful payment, you can navigate to the 'appointments' page
    router.push('/appointments');
  };

  return (
    <View style={tw`flex-1 items-center px-5`}>
      <View style={tw`h-20`} />
      <Text style={tw`text-5xl text-center font-bold`}>Payment</Text>
      <View style={tw`h-10`} />
      <Text style={tw`text-lg`}>Total Charges: {totalCharges} LKR</Text>
      <View style={tw`h-10`} />
      <TextInput
        style={tw`border rounded-lg p-2 w-full`}
        placeholder="Enter Card Number"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />
      <View style={tw`h-10`} />
      <Button text="Pay Now" onPress={handlePayment} />
    </View>
  );
};

export default Payment;

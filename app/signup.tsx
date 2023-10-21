import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { Link, router } from "expo-router";
import Button from "../components/button/Button";

export default function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signup = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Account created successfully");
      router.push("login");
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={tw`w-full flex-1 justify-center items-center px-10`}
    >
      <Text style={tw`text-5xl text-center font-bold`}>Sign Up</Text>
      <View style={tw`w-full flex flex-col gap-5 my-5`}>
        <TextInput
          value={email}
          style={tw`w-full py-4 border border-gray-300 px-4 rounded-full`}
          placeholder="Email"
          placeholderTextColor={"gray"}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          style={tw`w-full py-4 border border-gray-300 px-4 rounded-full`}
          placeholder="Password"
          placeholderTextColor={"gray"}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      {loading ? (
        <ActivityIndicator size={"large"} color="gray" />
      ) : (
        <View style={tw`w-full flex flex-col gap-5`}>
          <Button text="Sign Up" onPress={signup} style={tw`w-full py-5`} />
        </View>
      )}
      <Text style={tw`text-xl mt-8`}>
        Already have an account? <Link href="login">Log in</Link>
      </Text>
    </KeyboardAvoidingView>
  );
}

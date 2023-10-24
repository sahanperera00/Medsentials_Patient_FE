import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { Link, router } from "expo-router";
import Button from "../components/button/Button";
import { Redirect } from "expo-router";
import useUsers from "../hooks/axios-functions/useUser";


export default function login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const {signInUser} = useUsers();

  const login = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
  
      //create a contextAPI Later On -> 
      const mongoLog = await signInUser({email, password});
      console.log(mongoLog);
      alert("Login successfully");
      console.log(response);
      router.push("home");
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(getAuth().currentUser);
    });
  }, []);

  return (
    <>
      {user ? (
        <Redirect href="home" />
      ) : (
        <KeyboardAvoidingView
          behavior="padding"
          style={tw`w-full flex-1 justify-center items-center px-10`}
        >
          <Text style={tw`text-5xl text-center font-bold`}>Login</Text>
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
              <Button text="Login" onPress={login} disabled={false}/>
            </View>
          )}
          <Text style={tw`text-xl mt-8`}>
            Don't have an account? <Link href="signup">Sign up</Link>
          </Text>
        </KeyboardAvoidingView>
      )}
    </>
  );
}

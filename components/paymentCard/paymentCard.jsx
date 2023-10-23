import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { ImageBackground } from "react-native";
import { useFonts } from "expo-font";

export default function paymentCard({ style, onPress, isPressed }) {
  const [loaded] = useFonts({
    Kredit: require("../../assets/fonts/kredit.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={[tw`w-full`, style]} onTouchStart={onPress}>
      <ImageBackground
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/medsentials.appspot.com/o/card.png?alt=media&token=7e4b8482-a7b2-4d93-9e95-b466ca1b9806&_gl=1*1aapgb4*_ga*MjA2NDU4MzI2Ny4xNjgxMDU3MTMx*_ga_CW55HF8NVT*MTY5NzkwMjI5NS4zNy4xLjE2OTc5MDI2NDEuNDkuMC4w",
        }}
        resizeMode="cover"
        style={[
          tw`w-full h-full rounded-2xl overflow-hidden`,
          { opacity: isPressed ? 1 : 0.5 },
        ]}
      >
        <Text
          style={{
            fontFamily: "Kredit",
            fontSize: 28,
            letterSpacing: 4,
            position: "absolute",
            bottom: 85,
            color: "white",
            marginLeft: 40,
          }}
        >
          1234 5678 9012 3456
        </Text>
        <Text
          style={{
            fontFamily: "Kredit",
            fontSize: 20,
            position: "absolute",
            bottom: 48,
            color: "white",
            marginLeft: 120,
          }}
        >
          12/22
        </Text>
        <Text
          style={{
            fontFamily: "Kredit",
            fontSize: 22,
            position: "absolute",
            bottom: 15,
            color: "white",
            marginLeft: 40,
          }}
        >
          Perera K. S. V.
        </Text>
      </ImageBackground>
    </View>
  );
}

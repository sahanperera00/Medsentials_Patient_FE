import { View, Text, Image } from "react-native";
import React from "react";

export default function ProfilePicture({ imgUrl, size }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: "grey",
        overflow: "hidden",
      }}
    >
      <Image source={{ uri: imgUrl }} style={{ width: size, height: size }} />
    </View>
  );
}

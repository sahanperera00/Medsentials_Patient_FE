import React from "react";
import { View, Text } from "react-native";
import tailwind from "twrnc";

//YOU CAN CHANGE THE VARIANT TYPES ACCORDING TO THE NECESSiTY
export const Badge = ({ variant = "default", text, style, ...props }) => {
  const variants = {
    default: {
      container: tailwind`bg-purple-800`,
      text: tailwind`text-white`,
    },
    pending: {
      container: tailwind`bg-orange-400`,
      text: tailwind`text-white`,
    },
    screening: {
      container: tailwind`bg-cyan-700`,
      text: tailwind`text-white`,
    },
    approved: {
      container: tailwind`bg-green-800`,
      text: tailwind`text-white`,
    },
    rejected: {
      container: tailwind`bg-red-600`,
      text: tailwind`text-white`,
    },
    dispatched: {
      container: tailwind`bg-indigo-600`,
      text: tailwind`text-white`,
    },
    delivered: {
      container: tailwind`bg-green-600`,
      text: tailwind`text-white`,
    },
  };
  return (
    <View
      {...props}
      style={[
        tailwind`h-5 px-3 py-.5 justify-center rounded-md w-20`,
        variants[variant].container,
        style,
        {
          alignItems: "center",
        },
      ]}
    >
      <Text
        style={[
          tailwind`text-xs font-bold text-transform: capitalize`,
          variants[variant].text,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

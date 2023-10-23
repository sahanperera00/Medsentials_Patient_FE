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
    completed: {
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

import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";

export default function deliveryOptionCard({ type, selected, onSelect }) {
  const iconColor = selected ? "#7e57c2" : "white";

  return (
    <View
      style={[
        tw`w-full h-25 flex items-center flex-row gap-5 rounded-2xl overflow-hidden mb-5`,
        selected ? tw`bg-[#7e57c2]` : tw`bg-[#f1eef7]`,
      ]}
      onTouchStart={() => onSelect(type)}
    >
      <View
        style={[
          tw`h-17 w-17 rounded-full flex justify-center items-center ml-5`,
          { backgroundColor: selected ? "#f1eef7" : "#7e57c2" },
        ]}
      >
        <FontAwesome5
          name={type === "delivery" ? "shuttle-van" : "store"}
          size={27}
          color={iconColor}
        />
      </View>
      <View>
        <Text
          style={[
            tw`text-xl mb-2 font-semibold`,
            { color: selected ? "white" : "black" },
          ]}
        >
          {type === "delivery" ? "Delivery" : "Pick-up at Store"}
        </Text>
        <Text style={[tw`w-50`, { color: selected ? "white" : "#333" }]}>
          {type === "delivery"
            ? "Medsentials offers delivery service to your address"
            : "You can pick up your order at a time that is suitable for you"}
        </Text>
      </View>
    </View>
  );
}

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Button({ text, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={tw.style(`w-full py-4 rounded-2xl bg-[#7e57c2]`, {
        opacity: disabled ? 0.5 : 1,
      })}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={tw`text-white text-center text-5`}>{text}</Text>
    </TouchableOpacity>
  );
}

// import { View, Text, TouchableOpacity } from "react-native";
// import React from "react";
// import tw from "twrnc";

// export default function Button({ text, onPress, style }) {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <View style={[tw`w-full py-4 rounded-2xl bg-[#7e57c2]`, style]}>
//         <Text style={tw`text-white text-center text-5`}>{text}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

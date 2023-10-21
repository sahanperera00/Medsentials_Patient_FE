import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity
      style={tw`w-full py-4 rounded-2xl bg-[#7e57c2]`}
      onPress={onPress}
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

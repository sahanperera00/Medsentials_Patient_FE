// import { View, Text } from "react-native";
// import React from "react";
// import tw from "twrnc";

// export default function Button({ text, onPress }) {
//   return (
//     <View style={tw`w-80 py-4 rounded-2xl bg-[#7e57c2]`}>
//       <Text style={tw`text-white text-center text-5`} onPress={onPress}>
//         {text}
//       </Text>
//     </View>
//   );
// }


import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Button({ text, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[tw`py-2 px-4 rounded-2xl bg-[#7e57c2]`, style]}>
        <Text style={tw`text-white text-center text-4`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}


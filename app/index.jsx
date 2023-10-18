import { Text, View } from "react-native";
import tw from "twrnc";

export default function Page() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-5xl text-center font-bold`}>Hello World</Text>
    </View>
  );
}

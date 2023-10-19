// import { View, Text } from "react-native";
// import { Link } from "expo-router";
// import React from "react";
// import tw from "twrnc";
// import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
// import DoctorList from "../../../components/Appointments/DoctorList";

// export default function home() {
//   return (
//     <View style={tw`flex-1 items-center px-5`}>
//       <View style={tw`h-30`} />
//       <ExpoStatusBar style="dark" />
//       <Text style={tw`text-5xl text-center font-bold`}>Home</Text>
//       <View style={tw`h-30`} />
//       {/* <Link href="/doctorDetails/1">
//       <Text style={tw`text-2xl text-center font-bold`}>Dr. Perera</Text>
//       </Link>
//       <Link href="/doctorDetails/2">
//       <Text style={tw`text-2xl text-center font-bold`}>Dr. Galappaththi</Text>
//       </Link> */}
//       <DoctorList />
//     </View>
//   );
// }
import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";
import tw from "twrnc";
import DoctorList from "../../../components/Appointments/DoctorList";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import SearchBar from '../../../components/searchbar/SearchBar';

export default function home() {
  return (
    

<View style={tw`flex-1 items-center mt-18`}>
<Text style={tw`text-3xl text-center font-bold`}>Choose Your Doctor</Text>

<DoctorList />
</View>
  );
}

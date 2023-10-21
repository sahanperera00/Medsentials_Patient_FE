
import { View, Text, SafeAreaView, Platform } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { doctors } from "../../assets/dummy/datadoc";
import { useEffect, useState } from "react";
import { COLORS } from "../../constants/theme";
import tw from "twrnc";
import Button from "../../components/button/Button";

const DoctorDetails = () => {
  //getting the params
  const [DoctorDetails, setDoctorDetails] = useState({});
  const params = useLocalSearchParams();
  const router = useRouter();

  //find the DoctorDetails
  const findDoctorDetails = (id) => doctors.find((item) => item._id == id);

  //set the DoctorDetails
  useEffect(() => {
    setDoctorDetails(findDoctorDetails(params.id));
  }, []);

  // console.log(DoctorDetails);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: true,
          headerTitle: "",
        }}
      />

      
<View style={tw`mt-8`}>
<Text style={tw`text-3xl text-center font-bold`}>Doctor Details</Text>
       
        
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop:50,
            paddingRight: 10,
            width: "auto",
          }}
        >
          
          <View style={tw`ml-40 -mt-5 mb-2`}>
  <Text style={tw`text-base text-transform: capitalize text-gray-700 font-bold ml-1`}>
    {DoctorDetails.name}
  </Text>
  <Text style={tw`text-base text-transform: capitalize text-gray-700 font-bold ml-1`}>
    {DoctorDetails.specialization}
  </Text>
  <View style={tw`mt-2 flex items-center justify-center`}>
    <Button
      text="Set Appointment"
      onPress={() => {
        router.push("/selectDateAndTime");
      }}
      style={tw`bg-[#7e57c2]`}
    />
  </View>
</View>


        </View>
        <View style={tw`ml-6 mt-10 mb-10`}>
          <Text style={tw`text-lg`}> Working Place</Text>
          <Text
          style={tw`text-base text-transform: capitalize text-gray-700 font-bold ml-1`}
          >{DoctorDetails.location}
          </Text>
        </View>
        <View style={tw`ml-6`}>
          <Text style={tw`text-lg`}> About </Text>
          <View
            style={[
              tw`bg-stone-300 rounded-lg mr-8 p-5 mt-2 `,
              Platform.OS === "android" && { elevation: 1 },
            ]}
          >
            <Text style={tw`text-sm  text-gray-700 text-justify ml-1 mr-10`}>{DoctorDetails.description}
            </Text>
          </View>
        </View>
       
        
      </View>
    </SafeAreaView>
  );
};

export default DoctorDetails;
import React from 'react';
import { View, Text, SafeAreaView, Platform, Image } from 'react-native'; // Import the Image component
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { doctors } from '../../assets/dummy/datadoc';
import Icon from 'react-native-vector-icons/Foundation';
import { useEffect, useState } from 'react';
import { COLORS } from '../../constants/theme';
import tw from 'twrnc';
import Button from '../../components/button/Button';

const DoctorDetails = () => {
  // Getting the params
  const [DoctorDetails, setDoctorDetails] = useState({});
  const params = useLocalSearchParams();
  const router = useRouter();

  // Find the DoctorDetails
  const findDoctorDetails = (id) => doctors.find((item) => item._id == id);

  // Set the DoctorDetails
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
          headerTitle: '',
        }}
      />

      <View style={tw`mt-8`}>
        <Text style={tw`text-3xl text-center font-bold`}>Doctor Details</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 50,
            paddingRight: 10,
            width: 'auto',
          }}
        >
          <Image
            source={require('../../assets/images/user2.png')} // Update the path to your image
            style={tw`h-30 w-30 mr-4`} // Adjust the height and width as needed
          />

          <View style={tw`ml-3`}>
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
                  router.push('/selectDateAndTime');
                }}
                style={tw`bg-[#7e57c2]`}
              />
            </View>
          </View>
        </View>

        <View style={tw`ml-6 mt-5`}>
          <Text style={tw`text-lg`}> About </Text>
          <View
            style={[
              tw`bg-stone-300 rounded-lg mr-8 p-5 mt-2 `,
              Platform.OS === 'android' && { elevation: 1 },
            ]}
          >
            <Text style={tw`text-sm text-gray-700 text-justify ml-1 mr-10`}>
              {DoctorDetails.description}
            </Text>
          </View>
        </View>

        <View style={tw`ml-6 mt-10 mb-10`}>
          <Text style={tw`text-lg`}> Working Place: 
            <Text style={tw`text-base text-transform: capitalize text-gray-700 font-bold ml-1`}>
              {'\t' + DoctorDetails.location}
            </Text>
          </Text>
        </View>

        <View style={tw`ml-6 -mt-5 mb-2`}>
          <Text style={tw`text-lg`}> Available Hours:      
            <Text style={tw`text-base text-gray-700 font-bold ml-1`}>
              {'\t' + '10 am - 7 pm'}
            </Text>
          </Text>
        </View>
        
        <View style={tw`ml-6 mt-5 flex items-center`}>
          <Icon name="info" size={25} color="#ac0000" style={tw`mr-2`} />
          <Text style={tw`text-base text-red-700 font-bold`}>
            Please set appointments within the available hours.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorDetails;


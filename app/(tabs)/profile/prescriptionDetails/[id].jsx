import { ScrollView, View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import tw from 'twrnc';
import { prescriptions } from '../../../../assets/dummy/data';
import { useLocalSearchParams } from 'expo-router';
import DrugCard from '../../../../components/prescriptions/drugs/DrugCard';
import { formatter } from '../../../../utils/formatter';
import Button from '../../../../components/button/Button';
import { useRouter } from 'expo-router';

const SinglePrescription = () => {

  const [prescription, setPrescription] = useState({})
  const params = useLocalSearchParams();
  const router = useRouter();


  const fetchPrescriptions = () => {
    const response = prescriptions.filter(prescription => prescription?._id === params.id);
    setPrescription(response[0]);
  }

  useEffect(() => {
    fetchPrescriptions();
  }, [])

  console.log(params.id);

  return (
    <ScrollView style={tw`flex-1 mt-10 mb-28`}>
      <View style={tw`ml-5 mt-10`}>
        <View style={tw`flex flex-row`}>
          <Text style={tw`text-3xl font-bold`}>Prescription : </Text>
          <Text style={tw`text-3xl font-bold text-transform: capitalize text-purple-700`}>{prescription?._id}</Text>
        </View>
        <View style={tw`flex flex-row`}>
          <Text style={tw`text-base text-stone-400 ml-.5`}>Doctor:</Text>
          <Text style={tw`text-base text-stone-400 ml-1`}>{prescription?.doctor}</Text>
        </View>
      </View>

      <ScrollView style={tw`mt-4 border-b border-purple-400 border-opacity-50 mx-4`}>
        <View style={tw`ml-4 mb-4`}>
          <Text style={tw`text-xl`}>
            Selected Drugs
          </Text>
        </View>
        {prescription?.drugs?.map((item, key) => (
          <View key={key} style={tw`bg-white w-100/100 rounded-xl shadow-sm my-1 mx-auto`}>
            <DrugCard
              data={item}
              handleTap={() => { }}
              handleLongPress={() => { }} />
          </View>
        ))}
        <View style={tw`mt-4`}></View>
      </ScrollView>

      <View style={tw`mt-4 border-b border-purple-400 border-opacity-50 mx-5 pb-4 mb-8`}>
        <Text style={tw`text-xl ml-4`}>Other Information</Text>
        <View>
          <Text style={tw`text-lg mt-8 mb-2 ml-4`}>Remarks</Text>
          <View style={tw`w-100% bg-purple-200 py-4 px-4 rounded-lg`}>
            <Text style={tw`ml-4`}>{prescription?.remark}</Text>
          </View>
        </View>

        <View>
          <Text style={tw`text-lg mt-8 mb-2 ml-4`}>Validity Period and Estimations</Text>
          <View style={tw`flex flex-row ml-3`}>
            <Text style={tw`text-base text-slate-600`}>Appointment Date: </Text>
            <Text style={tw`text-base text-slate-600`}>{prescription?.date}</Text>
          </View>

          <View style={tw`flex flex-row ml-3`}>
            <Text style={tw`text-base text-slate-600`}>Prescription Expiry Date: </Text>
            <Text style={tw`text-base text-slate-600`}>{prescription?.closingDate}</Text>
          </View>

          <View style={tw`flex flex-row ml-3p`}>
            <Text style={tw`text-base text-slate-600`}>Estimated Total:  </Text>
            <Text style={tw`text-base text-slate-600`}>{formatter(prescription?.total)}</Text>
          </View>
        </View>
      </View>
      <View style={tw`mx-5 mb-5`}>
        <Button onPress={()=>{
          if(prescription.status ==="pending"){
            router.push('/deliveryOption');
          }else{
            router.back();
          }
        }} text={prescription?.status === "pending" ? "Proceed to Checkout" : "Back to Prescription"}/>
      </View>

    </ScrollView>
  )
}

export default SinglePrescription;
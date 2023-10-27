import { ScrollView, View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import tw from 'twrnc';
import { prescriptions } from '../../../../assets/dummy/data';
import { useLocalSearchParams } from 'expo-router';
import DrugCard from '../../../../components/prescriptions/drugs/DrugCard';
import { formatter } from '../../../../utils/formatter';
import Button from '../../../../components/button/Button';
import { useRouter } from 'expo-router';
import usePrescriptions from '../../../../hooks/axios-functions/usePrescriptions';

const SinglePrescription = () => {

  //custom hooks
  const {getPrescriptionById} = usePrescriptions();

  const [prescription, setPrescription] = useState({})
  const params = useLocalSearchParams();
  const router = useRouter();


  const fetchPrescriptions = async() => {
    try{
      const response = await getPrescriptionById(params.id);
      setPrescription(response);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPrescriptions();
  }, [])

  return (
    <ScrollView style={tw`flex-1 mt-10 mb-28`}>
      <View style={tw`ml-5 mt-10`}>
        <View style={tw`flex flex-row`}>
          <Text style={tw`text-3xl font-bold`}>Prescription : </Text>
          <Text style={tw`text-3xl font-bold text-transform: capitalize text-purple-700`}>{prescription?.prescriptId}</Text>
        </View>
        <View style={tw`flex flex-row`}>
          <Text style={tw`text-base text-stone-400 ml-.5`}>Doctor:</Text>
          <Text style={tw`text-base text-stone-400 ml-1`}>Dr. {prescription?.doctor?.firstName} {prescription?.doctor?.lastName}</Text>
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
            <Text style={tw`text-base text-slate-600`}>{(prescription?.createdAt)?.split('T')[0]}</Text>
          </View>

          <View style={tw`flex flex-row ml-3`}>
            <Text style={tw`text-base text-slate-600`}>Prescription Expiry Date: </Text>
            <Text style={tw`text-base text-slate-600`}>{'N/A'}</Text>
          </View>

          <View style={tw`flex flex-row ml-3p`}>
            <Text style={tw`text-base text-slate-600`}>Estimated Total:  </Text>
            <Text style={tw`text-base text-slate-600`}>{formatter(5230)}</Text>
          </View>
        </View>
      </View>
      <View style={tw`mx-5 mb-5`}>
        <Button onPress={()=>{
            router.push('/deliveryOption');
        }} text={"Proceed to Checkout"}/>
      </View>
    </ScrollView>
  )
}

export default SinglePrescription;
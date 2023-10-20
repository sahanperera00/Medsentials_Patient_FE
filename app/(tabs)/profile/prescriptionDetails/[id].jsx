import {ScrollView, View,Text} from 'react-native'
import React, {useState}from 'react'
import tw from 'twrnc';
import { prescriptions } from '../../../../assets/dummy/data';
import { useLocalSearchParams } from 'expo-router';

const SinglePrescription = ()=>{

  const [prescription, setPrescription] = useState({})  
  const params = useLocalSearchParams();

  console.log(params.id);
  
  return(
    <ScrollView>
      <Text>SinglePrescription</Text>
    </ScrollView>
  )
}

export default SinglePrescription;
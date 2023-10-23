import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import usePrescriptions from '../hooks/axios-functions/usePrescriptions';
import tw from 'twrnc';

const AxiosTest = ()=>{
    const [text, setText] = useState([]);
    console.log("Text is", text);

    const {testBackend} = usePrescriptions();

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await testBackend();
            setText(response);
        }

        fetchData();
    },[])

    

    return (
        <View>
            <Text style={tw`ml-30 mt-30 text-3xl`}>{text ? text: "Hello"}</Text>
        </View>
    )
}

export default AxiosTest;
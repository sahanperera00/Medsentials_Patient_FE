import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from 'twrnc';
import usePrescriptions from '../hooks/axios-functions/usePrescriptions';


const AxiosTest = ()=>{

    const {testBackend} = usePrescriptions();
    const [testText, setTestText] = useState('');

    useEffect(()=>{
        setTestText(testBackend());
    },[])
    return (
        <View>
            <Text>{testText ? testText : 'API IS NOT WORKING, CHECK THE ENV'}</Text>
        </View>
    )
}

export default AxiosTest;
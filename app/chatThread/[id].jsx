import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function chatThread() {

const {id} = useLocalSearchParams();

  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}
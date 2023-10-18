import { Text, View } from "react-native";
import React, { Component } from "react";
import tw from "twrnc";

export default class appointments extends Component {
  render() {
    return (
      <View style={tw`flex-1 items-center px-5`}>
        <View style={tw`h-30`} />
        <Text style={tw`text-5xl text-center font-bold`}>Appointments</Text>
      </View>
    );
  }
}

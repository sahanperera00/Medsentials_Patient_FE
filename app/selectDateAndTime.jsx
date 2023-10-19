import { View, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import tw from "twrnc";
import { router } from "expo-router";
import Button from "../components/button/Button";

const SelectDateAndTime = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [showTimePicker, setShowTimePicker] = useState(true);

  const handleDateChange = (event, selected) => {
    const currentDate = selected || selectedDate;
    setSelectedDate(currentDate);
  };

  const handleTimeChange = (event, selected) => {
    const currentTime = selected || selectedTime;
    setSelectedTime(currentTime);
  };

  return (
    <View style={tw`flex-1 mt-18`}>
      <Text style={tw`text-3xl text-center font-bold`}>Select Time And Date</Text>

      <View style={tw`ml-6 mt-10 mb-10`}>
        <Text style={tw`text-lg`}> Type</Text>
      </View>
      <View style={[tw`ml-6 mt-10 mb-10`, { backgroundColor: "#f3eef5" }]}>
        <Text style={tw`text-lg`}>Select Date</Text>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="calendar"
            onChange={handleDateChange}
          />
        )}
      </View>

      <View style={[tw`ml-6 mt-10 mb-10`]}>
        <Text style={tw`text-lg`}> Select Time</Text>
        {showTimePicker && (
          <DateTimePicker
            value={selectedTime}
            mode="time"
            display="spinner"
            backgroundColor="#f3eef5"
            onChange={handleTimeChange}
          />
        )}
      </View>
      <Button
        text="Confirm Time And Date"
        onPress={() => {
          router.push("/payment");
        }}
        style={tw`bg-[#7e57c2]`}
      />
    </View>
  );
};

export default SelectDateAndTime;


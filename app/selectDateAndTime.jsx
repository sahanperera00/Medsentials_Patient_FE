import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../components/button/Button';
import { Calendar } from 'react-native-calendars';
import tw from 'twrnc';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

const SelectDateAndTime1 = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(''); // Initialize selectedDate as an empty string

  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(true);

  const handleTimeChange = (event, selected) => {
    const currentTime = selected || selectedTime;
    setSelectedTime(currentTime);
  };

  const handleDateSelect = (day) => {
    // Handle the selected date
    setSelectedDate(day.dateString);
  };

  return (
    <View style={{ flex: 1, padding: 30, paddingTop: 80 }}>
      <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold' }}>Select Date And Time</Text>

      <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', paddingTop: 30 }}>
        <Text style={{ fontSize: 18 }}>Type</Text>
        <Icon name="comments" size={20} color="#7e57c2" style={{ marginRight: 10, marginLeft:50 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Chat</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 18 }}>Select Date</Text>
        <Calendar
          onDayPress={handleDateSelect}
          current={selectedDate}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#7e57c2' },
          }}
          style={{ borderWidth: 1, borderColor: '#7e57c2', borderRadius: 10 }}
        />
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 18 }}>Select Time</Text>
        {showTimePicker && (
          <View style={tw`bg-stone-200 rounded-lg p-2`}>
            <DateTimePicker
              value={selectedTime}
              mode="time"
              display="spinner"
              onChange={handleTimeChange}
              textColor='#7e57c2'
              style={{ width: 200, height: 100, alignSelf: 'center' ,borderColor: '#7e57c2'}}
            />
          </View>
        )}
      </View>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Button
          text="Confirm Time And Date"
          onPress={() => {
            router.push('/payment');
          }}
          style={{ backgroundColor: '#7e57c2' }}
        />
      </View>
    </View>
  );
};

export default SelectDateAndTime1;




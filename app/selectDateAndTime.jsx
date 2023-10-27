import React, { useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import Button from "../components/button/Button";
import { Calendar } from "react-native-calendars";
import tw from "twrnc";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";

const SelectDateAndTime1 = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(true);
  const currentDate = new Date(); // Get the current date

  const handleTimeChange = (event, selected) => {
    const currentTime = selected || selectedTime;
    setSelectedTime(currentTime);
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  // Check if both date and time are selected
  const isDateTimeSelected = selectedDate && selectedTime;

  const isDatePriorToCurrent =
    selectedDate && new Date(selectedDate) < currentDate;

  return (
    <View style={{ flex: 1, padding: 30, paddingTop: 80 }}>
      <Text style={{ fontSize: 24, textAlign: "center", fontWeight: "bold" }}>
        Select Date And Time
      </Text>

      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <Text style={{ fontSize: 18 }}>Type</Text>
        <Icon
          name="comments"
          size={20}
          color="#7e57c2"
          style={{ marginRight: 10, marginLeft: 50 }}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Chat</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 18 }}>Select Date</Text>
        <View style={tw`bg-stone-100 rounded-lg p-3`}>
          <Calendar
            onDayPress={handleDateSelect}
            current={selectedDate}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: "#7e57c2" },
            }}
            style={{ borderWidth: 1, borderColor: "#7e57c2", borderRadius: 10 }}
          />
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 18 }}>Select Time</Text>
        {showTimePicker && (
          <View style={tw`bg-stone-100 rounded-lg p-2`}>
            <DateTimePicker
              value={selectedTime}
              mode="time"
              display="spinner"
              onChange={handleTimeChange}
              textColor="#7e57c2"
              style={{
                width: 310,
                height: 100,
                alignSelf: "center",
                borderWidth: 1,
                borderColor: "#7e57c2",
                borderRadius: 10,
              }}
            />
          </View>
        )}
      </View>

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Button
          text="Confirm Time And Date"
          onPress={() => {
            if (isDateTimeSelected) {
              if (isDatePriorToCurrent) {
                alert(
                  "Please select a date that is not prior to the current date."
                );
              } else {
                router.push("/payment");
              }
            } else {
              alert("Please select both date and time.");
            }
          }}
          style={{
            backgroundColor: isDateTimeSelected ? "#7e57c2" : "gray",
          }}
        />
      </View>
    </View>
  );
};

export default SelectDateAndTime1;

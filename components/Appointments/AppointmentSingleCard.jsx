import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Foundation"; // Import the icon library of your choice
import styles from "./appointments.style"; // Import your appointment card styles
import tw from "twrnc";
import { router } from "expo-router";

const AppointmentCard = ({ data, handleCancel, handleJoinChat, doctorImage }) => {

  const chatWithDoc = (userUID) => { 
    router.push("chatThread/MFtyBCzmZfVVSfSDfZw77qteQtN2"); 
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require("../../assets/images/doctor_6805035.png")} // Use the 'doctorImage' prop for the image source
        style={styles.doctorImage} // Apply styles for the doctor's image
      />
      <View style={styles.textContainer}>
        <Text style={styles.doctorName} numberOfLines={1}>
          {data?.doctorName}
        </Text>

        <View style={tw`flex-row items-center`}>
          <Icon name="calendar" size={16} color="#7e57c2" style={tw`mr-2`} />
          <Text style={tw`text-sm`}>{data?.date}</Text>
        </View>

        <View style={tw`flex-row items-center`}>
          <Icon name="clock" size={16} color="#7e57c2" style={tw`mr-2`} />
          <Text style={tw`text-sm`}>{data?.time}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => handleCancel(data._id)}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.joinChatButton}
            onPress={() => chatWithDoc()}
          >
            <Text style={styles.buttonText}>Join Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppointmentCard;

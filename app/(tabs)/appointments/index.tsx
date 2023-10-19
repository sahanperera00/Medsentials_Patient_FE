// App.js
import React from "react";
import { View } from "react-native";
import DoctorList from "../../../components/Appointments/DoctorList";

const Doctors = () => {
  return (
    <View style={{ flex: 1 }}>
      <DoctorList />
    </View>
  );
};

export default Doctors;
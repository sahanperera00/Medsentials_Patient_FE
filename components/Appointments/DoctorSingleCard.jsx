import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./DoctorSingleCard.style";
import tw from "twrnc";

const DoctorCard = ({ data, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(data._id)}
    >
      <Image
        source={require("../../assets/images/doctor_6805035.png")}
        style={styles.doctorImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {data?.name}
        </Text>

        <Text style={[tw`text-sm capitalize`, { marginBottom: 6 }]}>
          {data?.specialization}
        </Text>

        <Text style={tw`text-sm text-gray-400`}>{data?.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;

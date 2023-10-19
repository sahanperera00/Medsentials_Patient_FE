import { View, Text, TouchableOpacity } from "react-native";
import styles from "../common/item-cards/single-card.style";
import tw from "twrnc";


const DoctorCard = ({ data, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(data._id)}
    >
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {data?.name}
        </Text>
        
        <Text style={tw`text-sm capitalize`}>
          Specialization: {data?.specialization}
        </Text>
        <Text style={tw`text-sm text-gray-400`}>{data?.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;

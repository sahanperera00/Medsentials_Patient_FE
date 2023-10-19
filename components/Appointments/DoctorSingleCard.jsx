import { View, Text, TouchableOpacity } from "react-native";
import styles from "../common/item-cards/single-card.style";
import tw from "twrnc";
import { Badge } from "../common/badge/Badge";

//Change the values accordingly and use it for your purpose
const DoctorCard = ({ data, handleNavigate }) => {
  console.log(data);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(data._id)}
    >
      <View style={styles.textContainer}>
        <View style={tw`flex flex-row items-center`}>
          <View style={tw`flex-1`}>
            <Text style={styles.jobName} numberOfLines={1}>
              {data?.name}
            </Text>
          </View>
          <View>
            <Badge variant={data?.status} text={"Available"} />
          </View>
        </View>
        <View>
          <Text style={tw`text-sm text-transform: capitalize`}>
            Spcialization: {data?.specialization}
          </Text>
          <Text style={tw`text-sm text-gray-400`}>{data?.location} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;

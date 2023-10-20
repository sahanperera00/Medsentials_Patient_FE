import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../Appointments/DoctorSingleCard.style';
import tw from 'twrnc';
import { Badge } from '../badge/Badge';


//Change the values accordingly and use it for your purpose
const SingleCard = ({ data, handleNavigate }) => {

        console.log(data);
    return (
        <TouchableOpacity style={styles.container} onPress={() => handleNavigate(data._id)}>
            <View style={styles.textContainer}>
                <View style={tw`flex flex-row items-center`}>
                    <View style={tw`flex-1`}>
                        <Text style={styles.jobName} numberOfLines={1}>
                            {data?.po}
                        </Text>
                    </View>
                    <View>
                        <Badge variant={data?.status} text={data?.status} />
                    </View>
                </View>
                <View >
                    <Text style={tw`text-sm text-transform: capitalize`}>Purchase Order: {data?.po}</Text>
                    <Text style={tw`text-sm text-gray-400`}>Date: {data?.date} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SingleCard;
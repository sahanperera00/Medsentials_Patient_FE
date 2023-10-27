import { View, Text, TouchableOpacity } from 'react-native';
import styles from './single-card.style';
import tw from 'twrnc';
import { Badge } from '../common/badge/Badge';

const PrescriptionCard = ({ data, handleTap }) => {
    return (
        <TouchableOpacity style={[styles.container, tw`rounded-2xl`]}
            onPress={handleTap}>
            <View style={styles.textContainer}>
                <View style={tw`flex flex-row items-center`}>
                    <View style={tw`flex-1`}>
                        <Text style={styles.jobName} numberOfLines={1}>
                            PRES - {data?.prescriptId}
                        </Text>
                    </View>
                    <View>
                        <Badge variant={'pending'} text={'pending'} />
                    </View>
                </View>
                <View >
                    <Text style={tw`text-sm text-transform: capitalize`}>Doctor: {data?.doctor.firstName} {data?.doctor.lastName} </Text>
                    <Text style={tw`text-sm text-gray-400 text-transform: capitalize`}>Date:  {(data?.createdAt).split('T')[0]} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PrescriptionCard;
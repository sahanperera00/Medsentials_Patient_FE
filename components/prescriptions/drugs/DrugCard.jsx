import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../single-card.style';
import tw from 'twrnc'
import { Badge } from '../../common/badge/Badge';

const DrugCard = ({ data, handleTap, handleLongPress, variant }) => {

    return (
        <View>
            {variant === "search" ?
                <TouchableOpacity style={[styles.container, tw`rounded-2xl`]}
                    onLongPress={handleLongPress}
                    onPress={handleTap}>
                    <View style={styles.textContainer}>
                        <View style={tw`flex flex-row items-center`}>
                            <View style={tw`flex-1`}>
                                <Text style={styles.jobName} numberOfLines={1}>
                                    {data?.brand_name || data?.generic_name}
                                </Text>
                            </View>
                            <View>
                                <Badge variant={'default'} text={"50mg"} />
                            </View>
                        </View>
                        <View >
                            <Text style={tw`text-sm text-transform: capitalize`}>Product NDC: {data?.product_ndc}</Text>
                            <Text style={tw`text-sm text-gray-400 text-transform: capitalize`}>Product Type: {data?.product_type} </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.container}
                    onLongPress={handleLongPress}
                    onPress={handleTap}>
                    <View style={styles.textContainer}>
                        <View style={tw`flex flex-row items-center`}>
                            <View style={tw`flex-1`}>
                                <Text style={styles.jobName} numberOfLines={1}>
                                    {data?.drugName}
                                </Text>
                            </View>
                            <View>
                                <Badge variant={'default'} text={"50mg"} />
                            </View>
                        </View>
                        <View >
                            <Text style={tw`text-sm text-transform: capitalize`}>Product NDC: {data?.drugId}</Text>
                            <Text style={tw`text-sm text-gray-400 text-transform: capitalize`}>Type: {data?.drugType} </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}

export default DrugCard;
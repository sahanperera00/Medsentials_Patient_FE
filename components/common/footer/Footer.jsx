import {View, Text} from 'react-native';
import tw from 'twrnc';

const Footer = ()=>{
    return (
        <View style={tw`flex justify-center items-center mt-2`}>
            <Text style={tw``}>Project by Code Crusaders ©️</Text>
        </View>
    )   
}

export default Footer;
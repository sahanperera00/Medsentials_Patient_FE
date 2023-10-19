import styles from "./page-intro.style";
import { View, Text } from "react-native";
import tw from "twrnc";

const FormIntro = ({header, subheader})=>{
    return (
        <View>
            <View style={tw`m-5`}>
                <Text style={styles.userName}>{header}</Text>
                <Text style={tw`text-slate-400`}>{subheader}</Text>
            </View>
        </View>
    )
}
export default FormIntro;
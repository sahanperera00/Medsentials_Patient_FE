import styles from "./page-intro.style";
import { View, Text } from "react-native";
import tw from "twrnc";

const PageIntro = ({ status, header, subheader, date, id }) => {
  return (
    <View>
      <View style={tw`m-5`}>
        {/* <Text style={tw`text-slate-400 text-transform:capitalize`}>ID Reference: {id}</Text> */}
        <Text style={styles.userName}>{header}</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={tw`text-slate-400 text-transform: capitalize`}>
            {subheader}
          </Text>
          {/* <Badge variant={status} text={status} style={{ marginLeft: 5 }} /> */}
          {/* <Text style={tw`ml-30 text-slate-400 text-transform: capitalize`}>
            Date: {date}{" "}
          </Text> */}
        </View>
      </View>
    </View>
  );
};

export default PageIntro;

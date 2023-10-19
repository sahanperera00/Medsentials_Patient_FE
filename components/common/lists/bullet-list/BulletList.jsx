import { View, Text} from "react-native";
import tailwind from "twrnc";

// type ListItem = {
//   key: string;
// };

// type ListProps = {
//   variant?: "bullet" | "hyphenated" | "squared";
//   listItemStyle?: ViewStyle;
//   textStyle?: TextStyle;
//   data: ListItem[];
// };

export const BulletList = ({
    variant = "bullet",
    data,
    listItemStyle,
    textStyle,
}) => {
    const variants = {
        bullet: "\u2022",
        hyphenated: "\u2043",
        squared: "\u25A0",
    };

    return  (
        <View>
          {data.map((item) => (
            <View key={item?.key} style={[tailwind`mb-2`, listItemStyle]}>
              <Text
                style={[
                  tailwind`text-lg text-gray-950 dark:text-gray-50`,
                  textStyle,
                ]}
              >{`${variants[variant]} ${item?.key}`}</Text>
            </View>
          ))}
        </View>
      );
};
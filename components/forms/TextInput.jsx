import { useState } from "react";
import { TextInput as DefaultTextInput} from "react-native";
import tailwind from "twrnc";

export const TextInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleEndEditing = () => {
    setIsFocused(false);
  };

  return (
    <DefaultTextInput
      {...props}
      onFocus={handleFocus}
      onEndEditing={handleEndEditing}
      placeholderTextColor={tailwind.color("text-gray-500")}
      style={[
        tailwind`w-full bg-white border border-gray-200 rounded-md h-12 px-4 text-base`,
        isFocused ? tailwind`border-blue-400` : {},
        props.style,
      ]}
    />
  );
};
import { View, Pressable, Text } from "react-native";
import tailwind from "twrnc";

const ButtonGroupItem = ({
    value,
    label,
    onSelect,
    position = "middle",
    isSelected,
}) => {
    const positions = {
        first: tailwind`rounded-l-md`,
        middle: tailwind`border-l border-gray-200`,
        last: tailwind`rounded-r-md border-l border-gray-200`,
    };

    const states = {
        unselected: {
            text: tailwind`text-gray-950`,
            bg: tailwind`bg-gray-50`,
        },
        selected: {
            text: tailwind`text-gray-50 font-bold`,
            bg: tailwind`bg-gray-800`,
        },
    };

    const handleSelect = () => {
        onSelect(value);
    };

    return (
        <Pressable
            onPress={handleSelect}
            style={[
                tailwind`py-3 px-4`,
                isSelected ? states["selected"].bg : states["unselected"].bg,
                positions[position],
            ]}
        >
            <Text
                style={[
                    tailwind`font-medium`,
                    isSelected ? states["selected"].text : states["unselected"].text,
                ]}
            >
                {label}
            </Text>
        </Pressable>
    );
};

export const ButtonGroup = ({
    items,
    selectedItem,
    onSelect,
}) => {
    const getPosition = (index) => {
        if (index === 0) return "first";
        if (index + 1 === items.length) return "last";
        return "middle";
    };

    return (
        <View style={tailwind`flex flex-row`}>
            {items.map((item, index) => (
                <ButtonGroupItem
                    key={index}
                    value={item.value}
                    label={item.label}
                    onSelect={onSelect}
                    isSelected={selectedItem === item.value}
                    position={getPosition(index)}
                />
            ))}
        </View>
    );
};
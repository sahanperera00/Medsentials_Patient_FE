// ChatList.jsx
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const ChatList = ({ chats, onPressChat }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onPressChat(item.id)}>
      <View
        style={tw`p-6 border-b border-gray-300 flex-row items-center justify-between w-3/4`}
      >
        <View>
          <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
          <Text style={tw`text-gray-500`}>{item.lastMessage}</Text>
        </View>
        <Text style={tw`text-gray-500`}>{item.lastMessageTime}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={chats}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ChatList;

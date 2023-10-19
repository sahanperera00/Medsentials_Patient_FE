import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Link } from 'expo-router';
import SearchBar from '../../../components/searchbar/SearchBar';
import ChatList from "../../../components/chats/ChatList";


const chatsData = [
  {
    id: 1,
    title: "Chat 1",
    lastMessage: "Hello there!",
    lastMessageTime: "10:30 AM",
  },
  {
    id: 2,
    title: "Chat 2",
    lastMessage: "How are you?",
    lastMessageTime: "11:45 AM",
  },
  {
    id: 3,
    title: "Chat 3",
    lastMessage: "How are you?",
    lastMessageTime: "11:45 AM",
  },
  {
    id: 4,
    title: "Chat 4",
    lastMessage: "How are you?",
    lastMessageTime: "11:45 AM",
  },
  {
    id: 5,
    title: "Chat 5",
    lastMessage: "How are you?",
    lastMessageTime: "11:45 AM",
  },
  {
    id: 6,
    title: "Chat 6",
    lastMessage: "How are you?",
    lastMessageTime: "11:45 AM",
  },
  {
    id: 7,
    title: "Chat 7",
    lastMessage: "How are you?",
    lastMessageTime: "11:45 AM",
  }
];

export default function chats() {
  
  return (
    <View style={tw`flex-1 items-center mt-12`}>
      <Text style={tw`text-3xl text-center font-bold`}>My Chats</Text>
      <SearchBar />
      <ChatList chats={chatsData} onPressChat={undefined} />
      {/* <Link href="/chatThread/1">link1</Link>
      <Link href="/chatThread/2">link2</Link> */}
    </View>
  );
}
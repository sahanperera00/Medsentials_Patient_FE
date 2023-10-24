import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#7e57c2",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 90,
          paddingTop: 20,
          marginBottom: 30,
          marginHorizontal: 20,
          borderRadius: 20,
          elevation: 10,
          borderTopWidth: 0,
          position: "absolute",
          bottom: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.05,
          shadowRadius: 10,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          headerShown: false,
          tabBarLabel: "Appointments",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-calendar" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          headerShown: false,
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubble" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

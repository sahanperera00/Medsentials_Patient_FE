import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="login" />
      {/* <Stack.Screen
        name="pharmacyDetails"
        options={{ presentation: "card"}}
      /> */}
    </Stack>
  );
};

export default StackLayout;

import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChannelScreen from "../../Screens/Main/ChannelScreen";

const SettingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName={"Settings"}
    >
      <Stack.Screen name="GeneralSettings" component={ChannelScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;

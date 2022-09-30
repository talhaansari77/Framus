import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GeneralSettings from "../../Screens/Main/GeneralSettings";
import SearchScreen from "../../Screens/Main/SearchScreen/SearchScreen";

const SettingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Settings"}
    >
      <Stack.Screen name="GeneralSettings" component={GeneralSettings} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      {/* <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="MainSettings" component={MainSettings} /> */}
    </Stack.Navigator>
  );
};

export default SettingStack;

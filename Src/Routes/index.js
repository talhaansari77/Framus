import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import SettingStack from "./SettingStack/SettingStack";
import ChannelStack from "./ChannelStack";
import { StatusBar } from "expo-status-bar";

import RemainderStack from "./RemainderStack";

const RootNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ffff",
    },
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="SettingStack"
      >
        {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}

        <Stack.Screen name="MainStack" component={MainStack} />
        <Stack.Screen name="SettingStack" component={SettingStack} /> 
        <Stack.Screen name="RemainderStack" component={RemainderStack} /> 
        {/* <Stack.Screen name="SettingStack" component={SettingStack} />
        <Stack.Screen name="RemainderStack" component={RemainderStack} /> */}

        {/* <Stack.Screen name="ChannelStack" component={ChannelStack} />  */}
        {/* {/* <Stack.Screen name="Chat" component={Chat} /> */}
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default RootNavigator;

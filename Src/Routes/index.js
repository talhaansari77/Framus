import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
// import SettingStack from "./SettingStack/SettingStack";
// import ChannelStack from "./ChannelStack";
import { StatusBar } from "expo-status-bar";
import AuthStack from "./AuthStack/AuthStack";


// import RemainderStack from "./RemainderStack";

const RootNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ECEEF3",
    },
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="MainStack"
      >

        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />


      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default RootNavigator;

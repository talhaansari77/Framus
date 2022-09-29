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
      background: "#E7E8EB",
    },
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="MainStack"
      >
<<<<<<< HEAD
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
=======
        <Stack.Screen name="MainStack" component={MainStack} />
        {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
>>>>>>> de5751b8e0b785eb4175ba9901688429a433efb2

      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default RootNavigator;

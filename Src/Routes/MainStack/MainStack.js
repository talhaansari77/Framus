import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, View } from "react-native";
import styled from "react-native-styled-components";
import WelcomeCollection from "../../Screens/Main/MyCollection/WelcomeCollection";
import MyCollection from "../../Screens/Main/MyCollection/MyCollection";
import SelectScreen from "../../Screens/Main/SelectScreen";
import UploadImages from "../../Screens/Main/UploadImages";
import PlayMusic from "../../Screens/Main/PlayMusic/PlayMusic";
import Notifications from "../../Screens/Main/Notifications/Notifications";
import SettingScreen from "../../Screens/Main/Settings/SettingScreen";
import DisplayTimer from "../../Screens/Main/Settings/DisplayTimer/DisplayTimer";
import MyAccount from "../../Screens/Main/Settings/MyAccount/MyAccount";
import ArtSetting from "../../Screens/Main/Settings/ArtSetting/ArtSetting";

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Stack.Screen name="WelcomeCollection" component={WelcomeCollection} />
      <Stack.Screen name="ArtSetting" component={ArtSetting} />
      <Stack.Screen name="MyCollection" component={MyCollection} />
      <Stack.Screen name="SelectScreen" component={SelectScreen} />
      <Stack.Screen name="UploadImages" component={UploadImages} />
      <Stack.Screen name="PlayMusic" component={PlayMusic} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="DisplayTimer" component={DisplayTimer} />
      <Stack.Screen name="MyAccount" component={MyAccount} />




    </Stack.Navigator>
  );
};

export default MainStack;

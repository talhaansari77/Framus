import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, View } from "react-native";
import styled from "react-native-styled-components";
import WelcomeCollection from "../../Screens/Main/MyCollection/WelcomeCollection";
import MyCollection from "../../Screens/Main/MyCollection/MyCollection";
import SelectScreen from "../../Screens/Main/SelectScreen";
import UploadImages from "../../Screens/Main/UploadImages";



const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}
      // initialRouteName="UploadImages"
    >

     
      <Stack.Screen name="WelcomeCollection" component={WelcomeCollection} />
      <Stack.Screen name="MyCollection" component={MyCollection} />
      <Stack.Screen name="SelectScreen" component={SelectScreen} />
      <Stack.Screen name="UploadImages" component={UploadImages} />


    </Stack.Navigator>
  );
};

export default MainStack;



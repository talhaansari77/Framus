import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../Utils/Colors";

import Home from "../../Screens/Main/Home";
import CustomText from "../../Components/CustomText";
import { Platform, View } from "react-native";
import styled from "react-native-styled-components";



const MainStack = () => {
  // const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,

        tabBarStyle: {
          backgroundColor: colors.secondary,
          borderColor: colors.secondary,
          height: verticalScale(60),
        },
        // tabBarIcon: ({ focused, size, color }) => {
        //   let iconName;
        //   if (route.name === "Profile") {
        //     iconName = "user";
        //     size = focused ? 24 : 20;
        //   } else if (route.name === "Favorite") {
        //     iconName = "heart";
        //     size = focused ? 24 : 20;
        //   } else if (route.name === "Home") {
        //     iconName = "home";
        //     size = focused ? 24 : 20;
        //   } else if (route.name === "AddNew") {
        //     iconName = "plus-square";
        //     size = focused ? 24 : 20;
        //   } else if (route.name === "Live") {
        //     iconName = "live-tv";
        //     size = focused ? 24 : 20;
        //     return (
        //       <BottomTabIcon>
        //         <MaterialIcons
        //           name={iconName}
        //           size={moderateScale(size)}
        //           color={color}
        //         />
        //         <CustomText label={route.name} color={colors.white} />
        //       </BottomTabIcon>
        //     );
      //     }
      //     return (
      //       <BottomTabIcon>
      //         <Feather
      //           name={iconName}
      //           size={moderateScale(size)}
      //           color={color}
      //         />
      //         <CustomText label={route.name} color={colors.white} />
      //       </BottomTabIcon>
      //     );
      //   },
      })}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#fff",
        // activeBackgroundColor: "#fff",
        showIcon: true,
      }}
      initialRouteName="Home"
      // initialRouteName={"AddReminder"}
    >

      <Stack.Screen name="Home" component={Home} />




    </Stack.Navigator>
  );
};

export default MainStack;

const BottomTabIcon = styled(View, {
  justifyContent: "center",
  alignItems: "center",
  marginTop: Platform.OS == "ios" ? 15 : 0,
});

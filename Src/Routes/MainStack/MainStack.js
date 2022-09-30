import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../Utils/Colors";
import Profile from "../../Screens/Main/Profile";
import Favorite from "../../Screens/Main/Favorite";
import Live from "../../Screens/Main/Live";
import Home from "../../Screens/Main/Home";
import CustomText from "../../Components/CustomText";
import { Platform, View } from "react-native";
import styled from "react-native-styled-components";
import SearchScreen from "../../Screens/Main/SearchScreen/SearchScreen";
import AddReminder from "../../Screens/Main/AddReminder/AddReminder";

import ChannelScreen from "../../Screens/Main/ChannelScreen";
const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
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
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = "user";
            size = focused ? 24 : 20;
          } else if (route.name === "Favorite") {
            iconName = "heart";
            size = focused ? 24 : 20;
          } else if (route.name === "Home") {
            iconName = "home";
            size = focused ? 24 : 20;
          } else if (route.name === "AddNew") {
            iconName = "plus-square";
            size = focused ? 24 : 20;
          } else if (route.name === "Live") {
            iconName = "live-tv";
            size = focused ? 24 : 20;
            return (
              <BottomTabIcon>
                <MaterialIcons
                  name={iconName}
                  size={moderateScale(size)}
                  color={color}
                />
                <CustomText label={route.name} color={colors.white} />
              </BottomTabIcon>
            );
          }
          return (
            <BottomTabIcon>
              <Feather
                name={iconName}
                size={moderateScale(size)}
                color={color}
              />
              <CustomText label={route.name} color={colors.white} />
            </BottomTabIcon>
          );
        },
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
      {/* <AddReminder /> */}
      {/* <Tab.Screen name="AddReminder" component={AddReminder} /> */}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="AddNew" component={ChannelScreen} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />



      <Tab.Screen
        name="ChannelScreen"
        component={ChannelScreen}
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />

  
      <Tab.Screen
        name="AddReminder"
        component={AddReminder}
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;

const BottomTabIcon = styled(View, {
  justifyContent: "center",
  alignItems: "center",
  marginTop: Platform.OS == "ios" ? 15 : 0,
});

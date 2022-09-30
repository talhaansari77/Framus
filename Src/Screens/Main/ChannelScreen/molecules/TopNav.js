import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../Home";
import Profile from "../../Profile";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../Utils/Colors";
import TopHome from "./TopHome";
import AllVideos from "./AllVideos";
import CustomText from "../../../../Components/CustomText";

const Tab = createMaterialTopTabNavigator();
const TopNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: colors.black,
          height: verticalScale(32),
          marginHorizontal: scale(10),
          elevation: 0,
        },
        tabBarAllowFontScaling: true,

        tabBarLabel: ({ focused, size, color }) => {
          let screenName = "";
          if (route.name === "Home") {
            screenName = "Home";
            color = focused ? colors.white : colors.gray;
          } else if (route.name === "AllVideos") {
            screenName = "All Videos";
            color = focused ? colors.white : colors.gray;
          } else if (route.name === "TvShow") {
            screenName = "Tv Show";
            color = focused ? colors.white : colors.gray;
          } else if (route.name === "Movie") {
            screenName = "Movie";
            color = focused ? colors.white : colors.gray;
          } else if (route.name === "Animation") {
            screenName = "Animation";
            color = focused ? colors.white : colors.gray;
          } else if (route.name === "Playlist") {
            screenName = "Playlist";
            color = focused ? colors.white : colors.gray;
          }
          return (
            <CustomText
              label={screenName}
              color={color}
              fontSize={11}
              fontFamily="medium"
            />
          );
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 90 },
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.white,
        },
      })}
    >
      <Tab.Screen name="Home" component={TopHome} />
      <Tab.Screen name="AllVideos" component={AllVideos} />
      <Tab.Screen name="TvShow" component={AllVideos} />
      <Tab.Screen name="Movie" component={AllVideos} />
      <Tab.Screen name="Animation" component={AllVideos} />
      <Tab.Screen name="Playlist" component={AllVideos} />
    </Tab.Navigator>
  );
};

export default TopNav;

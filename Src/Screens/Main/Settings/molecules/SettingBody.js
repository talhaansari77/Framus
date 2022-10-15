import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../../../../../Assets/Icons";
import styled from "react-native-styled-components";
import { colors } from "../../../../Utils/Colors";
import CustomText from "../../../../Components/CustomText";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../../../../Components/Spacer";
import { verticalScale } from "react-native-size-matters";

const SettingBody = () => {
  const navigation = useNavigation();
  const settingArray = [
    {
      id: 1,
      icon: icons.clock,
      name: "Display Timer",
      rightArrow: icons.rightArrow,
      onPress: () => navigation.navigate("DisplayTimer"),
    },
    {
      id: 2,
      icon: icons.account,
      name: "My Account",
      rightArrow: icons.rightArrow,
      onPress: () => navigation.navigate("MyAccount"),

     
        
    },
    {
      id: 3,
      icon: icons.art,
      name: "Art Settings",
      rightArrow: icons.rightArrow,
      onPress: () => navigation.navigate("ArtSetting"),
    },
    {
      id: 4,
      icon: icons.headset,
      name: "Support",
      rightArrow: icons.rightArrow,
      onPress: () => navigation.navigate("Settings"),
    },
    {
      id: 5,
      icon: icons.store,
      name: "Store",
      rightArrow: icons.rightArrow,
      onPress: () => navigation.navigate("Settings"),
    },
  ];
  return (
    <View>
      <Spacer height={verticalScale(10)} />
      {settingArray.map((item, index) => (
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={item.onPress} key={index}>
          <MapBody>
            <InnerMapBody>
              <View style={{ flex: 1.5 }}>
                <Image
                  source={item.icon}
                  resizeMode="contain"
                  style={{ width: 25, height: 25, alignSelf: "center" }}
                />
              </View>
              <View style={{ flex: 9.5, alignSelf: "center" }}>
                <CustomText
                  fontSize={13}
                  color={colors.darkBlack}
                  fontFamily={"light"}
                  label={item.name}
                />
              </View>

              <View style={{ alignSelf: "center", flex: 1 }}>
                <Image
                  source={item.rightArrow}
                  resizeMode="cover"
                  style={{ width: 8, height: 13 }}
                />
              </View>
            </InnerMapBody>
          </MapBody>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const InnerMapBody = styled(View, {
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "row",
  alignSelf: "center",
});

const MapBody = styled(View, {
  width: "100%",
  height: verticalScale(48),
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: colors.white,
  marginBottom: 10,
  borderRadius: 15,
});

export default SettingBody;

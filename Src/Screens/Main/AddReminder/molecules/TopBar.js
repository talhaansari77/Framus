import { View, Text, SafeAreaView, Image, Platform,TouchableOpacity } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../../../../Utils/Colors";
import icons from "../../../../../Assets/Icons";
import styled from "react-native-styled-components";
import CustomText from "../../../../Components/CustomText";
import { Spacer } from "../../../../Components/Spacer";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const TopBar = () => {
  const navigation = useNavigation();
  return (
    // <SafeAreaView>
    <>
      <Main>
      
        <LeftTopBar
 activeOpacity={0.6}
 onPress={()=>{
   navigation.goBack()

 }}      
        >
          <AntDesign
            name="left"
            color={colors.white}
            size={22}
            // style={{ marginTop: 20 }}
          />
        </LeftTopBar>

        <RightTopBar>
          <Feather
            name={"bell"}
            color={colors.white}
            size={25}
            onPress={() =>
              navigation.navigate("RemainderStack", { screen: "Remainder" })
            }
          />
          <Feather name={"cast"} color={colors.white} size={25} 
            onPress={() =>
              navigation.navigate("RemainderStack", { screen: "Remainder" })
            }
          />
          <Feather
            name={"search"}
            color={colors.white}
            size={25}
            // onPress={() =>
            //   navigation.navigate("RemainderStack", { screen: "Remainder" })
            // }
          />
          <Feather
            name={"grid"}
            color={colors.white}
            size={25}
            // onPress={() =>
            //   navigation.navigate("SettingStack", { screen: "GeneralSetting" })
            // }
          />
        </RightTopBar>
      </Main>
    </>
  );
};

const Main = styled(View, {
  display: "flex",
  flexDirection: "row",
  backgroundColor: colors.primary,
  // paddingVertical: Platform.OS == "android" ? 6 : 10,
  justifyContent: "space-between",
  alignItems: "flex-end",
  padding: 10,
  opacity: 0.85,
  width: "100%",
  position: "absolute",
  zIndex: 1000,
});

const LeftTopBar = styled(TouchableOpacity, {
  // display: "flex",
  // flexDirection: "row",
  marginTop: 28,

  alignSelf: "center",
});

const RightTopBar = styled(View, {
  marginTop: 34,
  display: "flex",
  flexDirection: "row",
  width: "50%",
  justifyContent: "space-between",
  marginBottom: verticalScale(8),
  alignItems: "flex-end",
});

export default TopBar;

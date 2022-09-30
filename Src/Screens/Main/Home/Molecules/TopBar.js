import { View, Text, SafeAreaView, Image, Platform } from "react-native";
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
        <LeftTopBar>
          <AntDesign
            name="left"
            color={colors.white}
            size={22}
            style={{ marginTop: 30 }}
          />
          {/* <Image source={icons.PopUp} size={33} /> */}

          <View style={{ alignItems: "center", marginTop: 15 }}>
            <CustomText
              label={"Pop up Tv"}
              fontFamily={"lovers"}
              fontSize={22}
              marginBottom={-9}
              color={colors.white}
            />
            <CustomText
              label={"Remote"}
              fontFamily={"lovers"}
              fontSize={25}
              color={colors.white}
            />
            {/* Remote */}
          </View>
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

            onPress={() =>
              navigation.navigate("SettingStack", { screen: "SearchScreen" })
            }
          />
          <Feather
            name={"grid"}
            color={colors.white}
            size={25}
            onPress={() =>
              navigation.navigate("SettingStack", { screen: "GeneralSettings" })
            }
          />
        </RightTopBar>
      </Main>
    </>
    // <View></View>
    // </SafeAreaView>
  );
};

const Main = styled(View, {
  display: "flex",
  flexDirection: "row",
  backgroundColor: colors.primary,
  paddingVertical: Platform.OS == "android" ? 6 : 5,
  justifyContent: "space-between",
  alignItems: "flex-end",
  padding: 20,
});

const LeftTopBar = styled(View, {
  display: "flex",
  flexDirection: "row",
  marginTop: 12,
});

const RightTopBar = styled(View, {
  // marginTop: 20,
  display: "flex",
  flexDirection: "row",
  width: "50%",
  justifyContent: "space-between",
  marginBottom: verticalScale(8),
  alignItems: "flex-end",
});

export default TopBar;

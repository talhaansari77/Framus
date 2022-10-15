import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { colors } from "../../../../Utils/Colors";
import CustomText from "../../../../Components/CustomText";
import icons from "../../../../../Assets/Icons";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Header = ({ onNotification, onSetting, changeText, addCollection }) => {
  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor:
            !changeText || changeText == "On Display"
              ? colors.white
              : colors.white1,
          paddingBottom: addCollection ? verticalScale(5) : 0,
        },
      ]}
    >
      <TouchableOpacity
        onPress={onSetting}
        activeOpacity={0.6}
        style={{ alignSelf: "center" }}
      >
        <Image
          source={icons.settingIcon}
          style={{ height: 20, width: 35 }}
          resizeMode={"contain"}
          alignSelf={"center"}
          marginBottom={8}
        />
      </TouchableOpacity>

      <CustomText
        label={!changeText ? "On Display" : changeText}
        fontFamily={"bold"}
        fontSize={19}
        marginTop={-8}
        color={colors.black}
      />

      <TouchableOpacity onPress={onNotification} activeOpacity={0.6}>
        <Image
          source={icons.bellIcon}
          style={{ height: 23 }}
          resizeMode={"contain"}
        />
        <View style={styles.IconNumber}>
          <CustomText
            label="12"
            fontSize={8}
            alignSelf={"center"}
            fontFamily={"regular"}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // height:verticalScale(70),
    alignItems: "center",
    // paddingHorizontal:20,
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(25),
    paddingTop: verticalScale(10),
    // padding:20
    // paddingHorizontal

    paddingVertical: verticalScale(5),
    // paddingHorizontal:10,
    // paddingTop: Platform.OS == "ios" ? verticalScale(15) : 10,
  },
  IconNumber: {
    width: 18,
    // height: 18,
    borderRadius: 50,
    backgroundColor: colors.red,
    top: -30,
    left: 10,
    alignItems: "center",
    paddingTop: 1,
  },
});

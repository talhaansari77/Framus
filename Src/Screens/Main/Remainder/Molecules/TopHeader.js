import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import CustomText from "../../../../Components/CustomText";
import { colors } from "../../../../Utils/Colors";
import { moderateScale } from "react-native-size-matters";
import Calender from "./Calender";
import { verticalScale } from "react-native-size-matters";

const TopHeader = ({ navigation, onPress }) => {
  return (
    <View style={styles.header}>
      <AntDesign
        name="left"
        color={colors.white}
        size={moderateScale(18)}
        onPress={onPress}
      />

      <CustomText
        fontSize={"14"}
        fontWeight={"bold"}
        color={colors.white}
        fontFamily="inter"
      >
        Reminders
      </CustomText>
      <Feather name={"grid"} color={colors.white} size={22} />
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Platform.OS == "ios" ? 40 : 50,
    marginLeft: verticalScale(10),
    marginRight: verticalScale(20),
  },
});

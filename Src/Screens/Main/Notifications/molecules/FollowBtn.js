import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../Utils/Colors";
import CustomText from "../../../../Components/CustomText";

const FollowBtn = ({
  backgroundColor,
  borderRadius,
  label,
  color,
  borderColor,
  borderWidth,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        width: moderateScale(95),
        height: verticalScale(30),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundColor || colors.black,
        borderRadius: moderateScale(8),
        borderWidth: borderRadius,
        borderColor: borderColor,
        borderWidth: borderWidth,
      }}
    >
      <CustomText label={label} color={color} fontFamily={"bold"} />
    </TouchableOpacity>
  );
};

export default FollowBtn;

const styles = StyleSheet.create({});

import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
  Platform,
} from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import {
  ScaledSheet,
  verticalScale,
  scale,
  moderateScale,
} from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";

// import { ActivityIndicator } from "react-native-paper";
import { colors } from "../Utils/Colors";
import { Shadow } from 'react-native-shadow-2';
import icons from "../../Assets/Icons";
function CustomButton({
  loading,
  title,
  onPress,
  icon,
  color,
  width,
  height,
  borderColor,
  borderRadius,
  marginTop,
  alignItems,
  justifyContent,
  borderWidth,
  backgroundColor,
  fontFamily,
  marginBottom,
  marginHorizontal,
  opacity,
  fontSize,
  alignSelf,
  paddingHorizontal,
  paddingVertical,
  shadowColor,
  offsetX,
  offsetY,
  sw,
  shadowOpacity,
  ...props
}) {
  return (
    <>
      {Platform.OS == "ios" ? <></> : <Shadow style={{ width: Dimensions.get("window").width / (sw || 1.2), height: 40, position: "absolute" }} distance={20} offset={[offsetX || -140, offsetY || 18]}></Shadow>}
      <TouchableOpacity
        disabled={loading}
        activeOpacity={0.6}
        style={[
          {
            backgroundColor: backgroundColor ,
            // backgroundGradient: <LinearGradient colors={["#8E59E2", "#f3f3f3"]} />,
            width: width || "100%",
            height: height,
            borderColor: borderColor,
            borderRadius: borderRadius || 8,
            borderWidth: borderWidth,
            opacity: opacity,
            alignItems: alignItems || "center",
            alignSelf: alignSelf || "center",
            justifyContent: justifyContent || "center",
            marginTop,
            shadowColor: shadowColor || Platform.OS=="ios"? "#adb5bd":"black",
            shadowRadius: 8,
            elevation: 20,
            alignItems: "center",
            justifyContent: "center",
            shadowOpacity: shadowOpacity || 1,

            shadowOffset: { width: 3, height: 3 },
            marginBottom: marginBottom,
            marginHorizontal: marginHorizontal,
            paddingVertical: paddingVertical || verticalScale(12),

          },
        ]}
        onPress={onPress}
      >
        <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>

          {props.google ? (
            <View style={{ flex: 3.5, }}>
              <Image
                style={{
                  width: moderateScale(22),
                  height: verticalScale(22),
                  // flexDirection:'row',
                  // alignSelf:"center"
                  // tintColor: colors.gray,
                }}
                // resizeMode="contain"
                source={icons.google}
              />
            </View>
          ) : null}


          {loading ? (
            <ActivityIndicator color={colors.white} size={moderateScale(26)} />
          ) : (
            <View style={{ flex: 6.5, alignItems: props.google ? "flex-start" : "center" }}>
              <Text
                style={[
                  {
                    color: color || colors.white,
                    fontSize: fontSize || verticalScale(15),
                    fontFamily: fontFamily || "bold",
                    // textAlign: textAlign
                  },
                ]}
              >
                {title}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
}

export default CustomButton;

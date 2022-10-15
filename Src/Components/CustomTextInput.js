import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from "react-native-size-matters";
// import { colors } from "../utils/Colors";
import CustomText from "./CustomText";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../Utils/Colors";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-elements";
import { Entypo } from '@expo/vector-icons'; 



const CustomTextInput = ({
  eyeClick,
  password,
  setEyeClick,
  error,
  withLabel,
  ...props
}) => {
  return (
    <View>
      {withLabel ? (
        <CustomText
          label={withLabel}
          color={colors.gray}
          fontFamily="regular"
          fontSize={verticalScale(10)}
          // marginTop={marginTop}
          // marginBottom={verticalScale(10)}
        />
      ) : null}
      <TouchableOpacity
        onPress={props.onPress}
        disabled={!props.onPress}
        style={[
          {
            width: props.width || "100%",
            height: props.height || verticalScale(40),
            borderRadius: props.borderRadius || moderateScale(15),
            backgroundColor: props.backgroundColor,
            marginTop: props.marginTop || verticalScale(0),
            flexDirection: "row",
            borderColor: props.borderColor ,
            alignItems: "center",
            paddingLeft: props.paddingLeft,
          },
        ]}
      >
        {props.icon ? (
          <Image
            style={{
              width: moderateScale(20),
              height: verticalScale(15),
              tintColor: colors.gray,
            }}
            resizeMode="contain"
            source={props.icon}
          />
        ) : null}

        {props.search ? (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 10,
                alignSelf: "center",
              }}
            >
              <Feather
                name={"search"}
                color={colors.lightWhite}
                size={27}
                // onPress={() =>
                //   navigation.navigate("SettingStack", { screen: "SearchScreen" })
                // }
              />
            </View>
            {
              props.line?(
                <View
                style={{
                  backgroundColor: colors.lightWhite,
                  height: verticalScale(36),
                  width: scale(1.5),
                  marginLeft: 10,
                }}
              ></View>

              ):<></>
            }
         
          </View>
        ) : props.calendar ? (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 10,
                alignSelf: "center",
              }}
            >
              <Feather
                name={"calendar"}
                color={colors.lightWhite}
                size={27}
                // onPress={() =>
                //   navigation.navigate("SettingStack", { screen: "SearchScreen" })
                // }
              />
            </View>
            <View
              style={{
                backgroundColor: colors.lightWhite,
                height: verticalScale(36),
                width: scale(2),
                marginLeft: 10,
              }}
            ></View>
          </View>
        ) : null}

        {props.playCircle ? (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 10,
                alignSelf: "center",
              }}
            >
              <Feather
                name={"play-circle"}
                color={colors.lightWhite}
                size={27}
                // onPress={() =>
                //   navigation.navigate("SettingStack", { screen: "SearchScreen" })
                // }
              />
            </View>
            <View
              style={{
                backgroundColor: colors.lightWhite,
                height: verticalScale(36),
                width: scale(2),
                marginLeft: 10,
              }}
            ></View>
          </View>
        ) : null}

        {props.tv ? (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                marginLeft: 10,
                alignSelf: "center",
              }}
            >
              <Feather
                name={"tv"}
                color={colors.lightWhite}
                size={27}
                // onPress={() =>
                //   navigation.navigate("SettingStack", { screen: "SearchScreen" })
                // }
              />
            </View>
            <View
              style={{
                backgroundColor: colors.lightWhite,
                height: verticalScale(36),
                width: scale(2),
                marginLeft: 10,
              }}
            ></View>
          </View>
        ) : null}

        {props.calendarClock ? (
          <View style={{ display: "flex", flexDirection:   "row" }}>
            <View
              style={{
                marginLeft: 10,
                alignSelf: "center",
              }}
            >
              <MaterialCommunityIcons
                name={"calendar-clock"}
                color={colors.lightWhite}
                size={27}
                // onPress={() =>
                //   navigation.navigate("SettingStack", { screen: "SearchScreen" })
                // }
              />
            </View>
            <View
              style={{
                backgroundColor: colors.lightWhite,
                height: verticalScale(36),
                width: scale(2),
                marginLeft: 10,
              }}
            ></View>
          </View>
        ) : null}

        {/* {props.lineargradient ? (
          <View>
            <LinearGradient
              activeOpacity={0.6}
              colors={[colors.primary, colors.lightBlack]}
              padding={0.6}
              paddingLeft={2.9}
              paddingRight={2.9}
              borderRadius={10}
              // flexDirection={"row"}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            ></LinearGradient>
          </View>
        ) : null} */}

        <TextInput
          style={[
            {
              width:  password || eyeClick||props.mic || props.downArrow? props.inputWidth  : "95%",
              height: props.inputHeight || "100%",
              marginLeft: props.inputLeftMargin || 10,
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily: props.fontFamily || "bold",
              color: props.color || colors.white,
              fontSize: verticalScale(13),
            },
          ]}
          onChangeText={props.onChangeText}
          value={props.value}
          numberOfLines={props.numberOfLines}
          keyboardType={props.keyboardType}
          autoCapitalize="none"
          multiline={props.multiline}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
        />
        {password ? (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setEyeClick(!eyeClick);
            }}
          >
            {eyeClick ? (
              <Ionicons
                name="eye-off"
                size={moderateScale(22)}
                style={{ opacity: 0.5 }}
                color={colors.primary}
              />
            ) : (
              <Ionicons
                name="eye"
                size={moderateScale(22)}
                style={{ opacity: 0.5 }}
                color={colors.primary}
              />
            )}
            {/* <Image style={styles.icon} source={eyeClick ? images.eye:images.hiddenEye } /> */}
          </TouchableOpacity>
        ) : null}

        {props.mic ? (
          <View style={{ marginRight: 10 }}>
            <Feather
              name={"mic"}
              color={colors.lightWhite}
              height={50}
              size={27}
              alignSlef={"end"}
            />
          </View>
        ) : null}

        {props.downArrow ? (
          <View style={{ justifyContent:"flex-end"}}>
            <Entypo name="chevron-down" size={30}               color={colors.pureBlack}
/>
            {/* <SimpleLineIcons
              name={"arrow-down"}
              color={colors.pureBlack}
              // height={50}
              size={15}
              alignSlef={"end"}
            /> */}
          </View>
        ) : null}
      </TouchableOpacity>
      {error ? (
        <CustomText
          label="* "
          children={error}
          fontSize={verticalScale(8)}
          color={colors.red}
          fontWeight={"600"}
          marginTop={verticalScale(5)}
        />
      ) : null}
    </View>
  );
};
export default CustomTextInput;
const styles = ScaledSheet.create({
  icon: {
    width: "20@s",
    height: "15@vs",
    tintColor: colors.gray,
  },
});

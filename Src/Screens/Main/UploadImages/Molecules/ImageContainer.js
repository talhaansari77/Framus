import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScaledSheet } from "react-native-size-matters";
import gallery from "../../../../../Assets/Gallery";
import commonStyles from "../../../../Utils/CommonStyles";
import { colors } from "../../../../Utils/Colors";
import CustomTextInput from "../../../../Components/CustomTextInput";
import ToggleSwitch from "toggle-switch-react-native";
import CustomText from "../../../../Components/CustomText";

const ImageContainer = () => {
  const [isOn, setisOn] = useState(true);

//   const toggleSwitch = () => setisOn((previousState) => !previousState);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <TouchableOpacity 
        activeOpacity={0.7}
        style={styles.childContainer}>
          <Image source={gallery.uploadImage} style={commonStyles.img} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your prompt..."
            placeholderTextColor={colors.gray}
            style={{ height: "100%" }}
          />
        </View>
        <View style={styles.line}></View>
      </View>

      <CustomTextInput
        placeholder="Made with... (optional)"
        height={50}
        placeholderTextColor={colors.black}
        borderRadius={-1}
        fontFamily={"regular"}
        // backgroundColor={colors.red}
        color={colors.black}
        downArrow
      />
      <View style={styles.line}></View>
      <View
        style={styles.secondInput}
      >
        <CustomText
          label={"Post Publicly for the World to See"}
          fontSize={10}
          fontFamily={"regular"}
          color={colors.pureBlack}
        />

        <ToggleSwitch
          isOn={isOn}
          onColor={"#32D74B"}
          offColor={colors.gray}
          trackOnStyle={{ color: colors.black }}
          // thumbOffStyle={colors.white}
          size="large"
          onToggle={() => {
            setisOn(!isOn);
          }}
        />
      </View>
    </View>
  );
};

export default ImageContainer;

const styles = ScaledSheet.create({
  mainContainer: {
    height: "70%",

    backgroundColor: colors.white,
    marginVertical: 10,
    borderRadius: "20@s",
  },
  childContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    borderRadius: "15@s",
    overflow: "hidden",
    // marginVertical:10,
  },
  imgContainer: {
    width: "100%",
    height: "68%",
    // padding:10
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#EDEEF3",
  },
  inputContainer: {
    width: "100%",
    height: 70,
    padding: 10,
  },
  secondInput:{
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,

    //   padding:10
  }
});

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import gallery from "../../../../../Assets/Gallery";
import commonStyles from "../../../../Utils/CommonStyles";
import { colors } from "../../../../Utils/Colors";
import CustomTextInput from "../../../../Components/CustomTextInput";
import ToggleSwitch from "toggle-switch-react-native";
import CustomText from "../../../../Components/CustomText";
import * as ImagePicker from 'expo-image-picker'

const ImageContainer = () => {
  const [isOn, setisOn] = useState(true);
  const [image, setImage] = useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <TouchableOpacity
          onPress={() => OpenImageLib(setImage)}
          activeOpacity={0.7}
          style={styles.childContainer}>
          <Image source={image ? { uri: image ? image : '' } : gallery.uploadImage} style={commonStyles.img} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your prompt..."
            placeholderTextColor={colors.gray}
            multiline={true}
            numberOfLines={3}
            style={{ height: "100%",marginTop:verticalScale(5) }}
          />
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={{paddingLeft:10,paddingVertical:verticalScale(5)}}>
      <CustomTextInput
        placeholder="Made with... (optional)"
        height={50}
        inputWidth={"88%"}
        placeholderTextColor={colors.black}
        borderRadius={-1}
        fontFamily={"regular"}
    
        // backgroundColor={colors.red}
        color={colors.black}
        downArrow
      />

      </View>

     
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

const OpenImageLib = async (setImageCase) => {
  let permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    // allowsEditing: true,
  });
  console.log(pickerResult);
  setImageCase(pickerResult.uri);
};

const styles = ScaledSheet.create({
  mainContainer: {
    height: Platform.OS=="ios"? "70%":"72%",

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
    paddingLeft:20
    // padding: 10,

  },
  secondInput: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
    paddingLeft:20,
    paddingRight:15,
    paddingBottom:10,
    paddingTop:Platform.OS=="ios"? 5:0

    //   padding:10
  },

});

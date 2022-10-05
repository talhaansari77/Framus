import { View, Text, Image, TouchableOpacity, Platform, ScrollView } from "react-native";
import React, { Profiler, useState } from "react";
import styled from "react-native-styled-components";
import CustomText from "../../../Components/CustomText";
import { Spacer } from "../../../Components/Spacer";
import profile from "../../../../Assets/Profile";
import CustomTextInput from "../../../Components/CustomTextInput";
import { colors } from "react-native-elements";
import CustomButton from "../../../Components/CustomButton";
import { EditValidate } from "./UseEditProfile";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import icons from "../../../../Assets/Icons";
import * as ImagePicker from 'expo-image-picker'
import commonStyles from "../../../Utils/CommonStyles";
import { Shadow } from 'react-native-shadow-2';

const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState('');


  const [submitError, setSubmitError] = useState({
    userNameError: "",
    firstNameError: "",
    lastNameError: "",
    nameListError: "",
  });
  const data = {
    userName: userName,
    firstName: firstName,
    lastName: lastName,
  };

  const nameList = [
    { id: 1, name: "ali" },
    { id: 2, name: "zaid" },
    { id: 3, name: "talha" },
  ];

  const onHandleSubmit = () => {

    // {
    //   userName == nameList.name
    //     ? console.log("Name Not Available")
    //     : console.log("Name Available");
    // }

    console.log("Namlist Simple", nameList);

    const response = EditValidate(data, submitError, setSubmitError, nameList);
    if (response) {
      console.log("EditValidate-response", response);
    }
  };

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

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Spacer height={Platform.OS == "ios" ? 60 : 30} />
        <CustomText
          label="Profile"
          fontFamily={"bold"}
          fontSize={20}
          alignSelf={"center"}
        />
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >


          {Platform.OS == "ios" ? <></> : <Shadow style={{ position: "absolute", height: 150, width: 150, borderRadius: 75, zIndex: -100 }} distance={17} offset={[-70, 40]}></Shadow>}
          <TouchableOpacity activeOpacity={0.7}
            onPress={() => OpenImageLib(setImage)}
            style={styles.imgContainer}>

            <View style={styles.imgInner}>


              <Image source={image ? { uri: image ? image : '' } : icons.profile} resizeMode="cover"
                style={commonStyles.img} />


            </View>

            <View style={styles.txtContainer}>
              <CustomText label="Upload" color={colors.white} fontSize={15} fontFamily={"semiBold"} />
            </View>
            {/* <View>
          <Image
            source={profile.profilePhoto}
            justifyContent={"center"}
            alignSelf={"center"}
          />
        </View> */}
          </TouchableOpacity>

        </View>

        <Spacer height={20} />

        <CustomText
          placeholder="hellloo"
          height={60}

        />
        <CustomTextInput
          placeholder="username"
          height={60}
          placeholderTextColor={colors.lightGray}
          borderRadius={10}
          fontFamily={"regular"}
          backgroundColor={colors.white}
          color={colors.black}
          value={userName}
          onChangeText={(nam) => {
            setUserName(nam),
              setSubmitError({ ...submitError, userNameError: "" });

            // let data = nameList.filter((user) => user.name.includes(txt)?user:'');
            // data.lenght > 0 ? (setSubmitError({ ...submitError, userNameError: "" })) : ("")
            // setFilerList(data);
            // console.log(data);
          }}
          error={submitError.userNameError}
        // onChangeText={(txt) => {
        //   let data =SearchLists.filter((item) => item.name.includes(txt)?item:'');
        //   setFilerList(data);
        //   console.log(data);
        // }}
        />
        <CustomTextInput
          placeholder="First Name"
          height={60}
          placeholderTextColor={colors.lightGray}
          borderRadius={10}
          fontFamily={"regular"}
          backgroundColor={colors.white}
          color={colors.black}
          marginTop={20}
          value={firstName}
          onChangeText={(firstnam) => {
            setFirstName(firstnam),
              setSubmitError({ ...submitError, firstNameError: "" });
          }}
          error={submitError.firstNameError}
        />
        <CustomTextInput
          placeholder="Last Name"
          height={60}
          placeholderTextColor={colors.lightGray}
          borderRadius={10}
          fontFamily={"regular"}
          backgroundColor={colors.white}
          color={colors.black}
          marginTop={20}
          value={lastName}
          onChangeText={(lastnam) => {
            setLastName(lastnam),
              setSubmitError({ ...submitError, lastNameError: "" });
          }}
          error={submitError.lastNameError}
        />
        <Spacer height={80} />
        <CustomButton
          title="Create Profile"
          borderRadius={15}
          fontFamily={"bold"}
          color={colors.white}
          backgroundColor={colors.black}
          onPress={() => {
            // onHandleSubmit();
            const response = EditValidate(data, submitError, setSubmitError, nameList)
            if (response)
              navigation.navigate("MainStack", { screen: "WelcomeCollection" });
          }}
        />
      </ScrollView>
    </Container>


  );
};

const Container = styled(View, {
  display: "flex",
  width: "100%",
  padding: 20,
  flex: 1,
  backgroundColor: "#f3f3f3",
  // backgroundColor: "red",
});

const styles = ScaledSheet.create({
  imgContainer: {
    width: "150@vs",
    height: "150@vs",
    borderRadius: 100,
    backgroundColor: "#f8f9fa",

    padding: "10@s",
    marginVertical: verticalScale(20),

    shadowColor: "#dee2e6",
    // shadowRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 1,

    shadowOffset: { width: 5, height: 5 },

  },
  imgInner: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    position: "absolute",
    overflow: "hidden",
    zIndex: 10,
    // elevation:100,

  },
  txtContainer: {
    position: "absolute",
    // top: 0,
    zIndex: 11,
    // elevation:11,
  },
});

export default Signup;
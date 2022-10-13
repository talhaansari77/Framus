import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
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
import * as ImagePicker from "expo-image-picker";
import commonStyles from "../../../Utils/CommonStyles";
import { Shadow } from "react-native-shadow-2";
import SignupHeader from "./molecules/SignupHeader";

const Signup = ({ navigation, route }) => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const [submitError, setSubmitError] = useState({
    userNameError: "",
    firstNameError: "",
    emailError: "",
    lastNameError: "",
    nameListError: "",
  });
  const data = {
    userName: userName,
    firstName: firstName,
    lastName: lastName,
    email: email,
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
    setImage(pickerResult.uri);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Spacer height={Platform.OS == "ios" ? 40 : 30} />
        <SignupHeader fromSetting={route?.params?.fromSetting} />
        {/* <CustomText
          label="Profile"
          fontFamily={"bold"}
          fontSize={25}
          alignSelf={"center"}
        /> */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              OpenImageLib();
            }}
            style={
              image
                ? styles.mainImg
                : {
                    width: 220,
                    height: 220,
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 30,
                    borderRadius: 100,
                  }
            }
          >
            {/* <View style={styles.imgContainer}> */}

            <Image
              source={
                image ? { uri: image ? image : "" } : profile.profilePhotoUpload
              }
              resizeMode="cover"
              // style={commonStyles.img}
            />
          </TouchableOpacity>
          {route?.params?.fromSetting ? (<CustomText fontFamily={"bold"} label={"Change Photo"} />) : (null)}
          

          {/* <TouchableOpacity 
          activeOpacity={0.6}
          onPress={()=>{
            OpenImageLib()

          }}
          style={styles.imgInner}
          >
            <Image
              source={image ? { uri: image ? image : "" } : profile.profilePhotoUpload}
              resizeMode="cover"
              // style={commonStyles.img}
            />
          </TouchableOpacity> */}
          {/* </View> */}

          {/* <View style={styles.txtContainer}>
            <CustomText
              label="Upload"
              color={colors.white}
              fontSize={15}
              fontWeight={"700"}
              fontFamily={"bold"}
            />
          </View> */}
        </View>

        {/* <Spacer height={10} /> */}

        <CustomText placeholder="hellloo" height={40} />
        <FormContainer marginTop={submitError.firstNameError ? 100 : 20}>
          <CustomText
            label={"Username"}
            fontFamily={"regular"}
            color={"grey"}
            marginLeft={8}
            fontSize={9}
          />
          <CustomTextInput
            placeholder="LawdHamMercy"
            height={30}
            placeholderTextColor={colors.lightGray}
            borderRadius={10}
            fontFamily={"regular"}
            // backgroundColor={colors.black}
            color={colors.black}
            value={userName}
            onChangeText={(nam) => {
              setUserName(nam),
                setSubmitError({ ...submitError, userNameError: "" });
            }}
            error={submitError.userNameError}
            // onChangeText={(txt) => {
            //   let data =SearchLists.filter((item) => item.name.includes(txt)?item:'');
            //   setFilerList(data);
            //   console.log(data);
            // }}
          />
        </FormContainer>

        <FormContainer>
          <CustomText
            label={"Email"}
            fontFamily={"regular"}
            color={"grey"}
            marginLeft={8}
            fontSize={9}
          />
          <CustomTextInput
            placeholder="christophermontgomery@gmail.com"
            height={30}
            placeholderTextColor={colors.lightGray}
            borderRadius={10}
            fontFamily={"regular"}
            // backgroundColor={colors.black}
            color={colors.black}
            value={email}
            onChangeText={(eml) => {
              setUserName(eml),
                setSubmitError({ ...submitError, emailError: "" });
            }}
            error={submitError.emailError}
            // onChangeText={(txt) => {
            //   let data =SearchLists.filter((item) => item.name.includes(txt)?item:'');
            //   setFilerList(data);
            //   console.log(data);
            // }}
          />
        </FormContainer>

        <FormContainer>
          <CustomText
            label={"First name"}
            fontFamily={"regular"}
            color={"grey"}
            marginLeft={8}
            fontSize={9}
          />
          <CustomTextInput
            placeholder="Christopher@gmail.com"
            height={30}
            placeholderTextColor={colors.lightGray}
            borderRadius={10}
            fontFamily={"regular"}
            // backgroundColor={colors.black}
            color={colors.black}
            value={firstName}
            onChangeText={(firstnam) => {
              setFirstName(firstnam),
                setSubmitError({ ...submitError, firstNameError: "" });
            }}
            error={submitError.firstNameError}
          />
        </FormContainer>

        <FormContainer>
          <CustomText
            label={"Last name"}
            fontFamily={"regular"}
            color={"grey"}
            marginLeft={8}
            fontSize={9}
          />
          <CustomTextInput
            placeholder="Montgomery"
            height={25}
            placeholderTextColor={colors.lightGray}
            borderRadius={10}
            fontFamily={"regular"}
            // backgroundColor={colors.black}
            color={colors.black}
            value={lastName}
            onChangeText={(lastnam) => {
              setLastName(lastnam),
                setSubmitError({ ...submitError, lastNameError: "" });
            }}
            error={submitError.lastNameError}
          />
        </FormContainer>

        <Spacer height={20} />

        <View
          style={{
            height: 100,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomButton
            title= {route?.params?.fromSetting ? ("Save"): ("Create Profile")} 
            borderRadius={15}
            height={60}
            fontFamily={"bold"}
            color={colors.white}
            backgroundColor={colors.black}
            offsetX={17}
            sw={2}
            onPress={() => {
              // onHandleSubmit();
              const response = EditValidate(
                data,
                submitError,
                setSubmitError,
                nameList
              );
              if (response)
                navigation.navigate("MainStack", {
                  screen: "WelcomeCollection",
                });
            }}
          />
        </View>
      </Container>
    </ScrollView>
  );
};

const Container = styled(View, {
  display: "flex",
  width: "100%",
  padding: 26,
  flex: 1,
  // backgroundColor: "red",
});

const FormContainer = styled(View, props => ( {
  width: "100%",
  height: verticalScale(45),
  backgroundColor: colors.white,
  borderRadius: 10,
  alignSelf: "center",
  padding: 10,
  marginTop: props.marginTop ,

  }));

const styles = ScaledSheet.create({
  imgContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E7E8EB",
    shadowColor: Platform.OS == "ios" ? "#ced4da" : "#212529",
    borderRadius: 200,
    shadowRadius: 10,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: { width: 7, height: 5 },
  },
  imgInner: {
    // width: "100%",
    // height: "100%",
    borderRadius: 200,
    margin: 10,
    backgroundColor: "red",

    // elevation:100,
  },
  txtContainer: {
    position: "absolute",
    // top: 0,
    zIndex: 11,
    // elevation:11,
  },
  mainImg: {
    width: 220,
    height: 220,
    backgroundColor: "#E7E8EB",
    shadowColor: Platform.OS == "ios" ? "white" : "white",
    borderRadius: 200,
    shadowRadius: 10,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: { width: -5, height: -4 },
    margin: 30,
  },
});

export default Signup;

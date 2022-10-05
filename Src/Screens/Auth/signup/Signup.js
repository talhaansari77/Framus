import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import React, { Profiler, useState } from "react";
import styled from "react-native-styled-components";
import CustomText from "../../../Components/CustomText";
import { Spacer } from "../../../Components/Spacer";
import profile from "../../../../Assets/Profile";
import CustomTextInput from "../../../Components/CustomTextInput";
import { colors } from "react-native-elements";
import CustomButton from "../../../Components/CustomButton";
import { EditValidate } from "./UseEditProfile";

const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

  return (
    <Container>
      <Spacer height={Platform.OS=="ios"?60:30} />
      <CustomText
        label="Profile"
        fontFamily={"bold"}
        fontSize={20}
        alignSelf={"center"}
      />

      <TouchableOpacity activeOpacity={0.7}>
        <View>
          <Image
            source={profile.profilePhotoUpload}
            justifyContent={"center"}
            alignSelf={"center"}
          />
        </View>
      </TouchableOpacity>

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
      <Spacer height={Platform.OS=="ios"?80:50} />
      <CustomButton
        title="create Profile"
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

export default Signup;

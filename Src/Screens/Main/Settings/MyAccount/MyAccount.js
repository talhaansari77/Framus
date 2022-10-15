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
import CustomText from "../../../../Components/CustomText";
import { Spacer } from "../../../../Components/Spacer";
import profile from "../../../../../Assets/Profile";
import CustomTextInput from "../../../../Components/CustomTextInput";
import { colors } from "../../../../Utils/Colors";
import CustomButton from "../../../../Components/CustomButton";
//   import { EditValidate } from "./UseEditProfile";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import * as ImagePicker from "expo-image-picker";
import { Shadow } from "react-native-shadow-2";
import InputContainer from "./molecules/InputContainer";
import TopHeaders from "./molecules/TopHeaders";
import icons from "../../../../../Assets/Icons";
import commonStyles from "../../../../Utils/CommonStyles";

const MyAccount = ({ navigation }) => {
  const [userName, setUserName] = useState("LawdHamMercy");
  const [firstName, setFirstName] = useState("Christopher");
  const [email, setEmail] = useState("christophermontgomery@gmail.com");
  const [lastName, setLastName] = useState("Montgomery");
  const [image, setImage] = useState("");

  const [submitError, setSubmitError] = useState({
    userNameError: "",
    useEmailError: "",
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

  const inputData = [
    // label={"Username"}
    // placeholder="First Name"
    // placeholderTextColor={colors.lightGray}
    // value={userName}
    // onChangeText={(firstnam) => {
    //   setUserName(firstnam),
    //     setSubmitError({ ...submitError, firstNameError: "" });
    // }}
    {
      id: 1,
      label: "Username",
      placeholder: "Username",
      value: userName,
      onChangeText: (username) => {
        setUserName(username),
          setSubmitError({ ...submitError, firstNameError: "" });
      },
      error: () => {
        {
          submitError.userNameError;
        }
      },
    },
    {
      id: 2,
      label: "Email",
      placeholder: "Email",
      value: email,
      onChangeText: (username) => {
        setEmail(username),
          setSubmitError({ ...submitError, useEmailError: "" });
      },
      error: () => {
        {
          submitError.useEmailError;
        }
      },
    },
    {
      id: 2,
      label: "First Name",
      placeholder: "First Name",
      value: firstName,
      onChangeText: (username) => {
        setFirstName(username),
          setSubmitError({ ...submitError, firstNameError: "" });
      },
      error: () => {
        {
          submitError.firstNameError;
        }
      },
    },
    {
      id: 3,
      label: "Last Name",
      placeholder: "Last Name",
      value: lastName,
      onChangeText: (username) => {
        lastName(username),
          setSubmitError({ ...submitError, lastNameError: "" });
      },

      error: () => {
        {
          submitError.lastNameError;
        }
      },
    },
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
        <Spacer height={Platform.OS == "ios" ? 30 : 30} />
        <TopHeaders
        onPress={()=>{
            navigation.goBack()

        }}
         />

        {/* <Spacer height={20} /> */}

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
                {
                    width: 300,
                    height: 250,
                    alignItems: "center",
                    justifyContent: "center",
                    // margin: 30,
                    alignSelf: "center",

                    borderRadius: 100,

                }
             
                 
                  }
            
          >
            {/* <View style={styles.imgContainer}> */}

            <Image
              source={
                image ? { uri: image ? image : "" } : icons.upload
              }
              resizeMode="cover"
              style={commonStyles.img}
            />
          </TouchableOpacity>
        </View>

        <Spacer height={10} />
        <CustomText
          label="Change Photo"
          fontFamily={"bold"}
          fontSize={12}
          alignSelf={"center"}
          marginLeft={20}
        />
        <Spacer height={20} />

        {inputData.map((item) => {
          return (
            <InputContainer
              label={item.label}
              placeholder={item.placeholder}
              value={item.value}
              error={item.error}
              onChangeText={item.onChangeText}
            />
          );
        })}

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
            title="Create Profile"
            borderRadius={15}
            height={60}
            fontFamily={"bold"}
            color={colors.white}
            backgroundColor={colors.black}
            offsetX={17}
            sw={2}
            onPress={() => {
              // console.log("navig")
              // onHandleSubmit();
              const response = EditValidate(
                data,
                submitError,
                setSubmitError
                // nameList
              );
              if (response) navigation.navigate("MainStack");
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
  padding: 15,
  flex: 1,
  // backgroundColor: "red",
});

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

export default MyAccount;

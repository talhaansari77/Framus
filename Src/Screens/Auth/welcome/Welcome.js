import { View, Text, Image, ImageBackground, SafeAreaView, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import CustomText from "../../../Components/CustomText";
import gallery from "../../../../Assets/Gallery";
import styled from "react-native-styled-components";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../Utils/Colors";
import { Spacer } from "../../../Components/Spacer";
import CustomButton from "../../../Components/CustomButton";
import icons from "../../../../Assets/Icons";

const Welcome = ({ navigation }) => {
  return (
    <Container>
      <Center>
        <CustomText
          label={"FRĀMUS"}
          marginTop={30}
          fontFamily={"bold"}
          fontSize={45}
          color={colors.darkBlack}
        />

        <BottomShadow>
          <Spacer height={Platform.OS=="ios"?18:5} />
          <View>
            <Image source={gallery.splashImage} />
          </View>
        </BottomShadow>

        <Spacer height={Platform.OS=="ios"?40:25} />
        <CustomText
          label={"AI Generated Art"}
          color={colors.darkBlack}
          fontSize={"25"}
          fontFamily={"bold"}
        />
        <CustomText
          label={"Living in Your Home"}
          marginTop={Platform.OS=="ios"?-8:-14}
          color={colors.darkBlack}
          fontSize={"25"}
          fontFamily={"regular"}
        />

        <Spacer height={Platform.OS=="ios"?30:20} />

        {/* <View
          style={{
            shadowOffset: { width: 2, height: 3 },
            shadowColor: "#100C3E",
            shadowOpacity: 0.3,
            shadowRadius: 4,
            width: "100%",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center"
            // elevation: 1
          }}
        > */}
          <CustomButton
            title="Sign In"
            SelfAlign={"center"}
            alignItems="center"
            alignSelf={"center"}
            borderRadius={15}
            shadowColor={"#adb5bd"}
            backgroundColor={colors.white}
            color={colors.black}
            // verticalPadding={80}
            // paddingVertical={20}
            google
            onPress={() => navigation.navigate("Signup")}
          />
        {/* </View> */}

        <Spacer height={10} />

        {/* <View
          style={{
            shadowOffset: { width: 2, height: 3 },
            shadowColor: "#100C3E",
            shadowOpacity: 0.3,
            shadowRadius: 4,
            width: "100%",
            // elevation: 1
          }}
        > */}
          <CustomButton
            title="Sign Up"
            borderRadius={15}
            shadowColor={"#adb5bd"}

            backgroundColor={colors.black}
            color={colors.white}
            google
            onPress={() => navigation.navigate("Signup")}
          />
        {/* </View> */}

        <Spacer height={30} />

        <View style={{ justifyContent: "center", alignItems: "center",marginBottom:40 }}>
          <View>
            <CustomText
              label="By continuing you agree to our"
              fontFamily={"light"}
              fontWeight={Platform.OS=="ios"? "700":"500"}
              fontSize={11}
              marginBottom={4}
            />
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <CustomText label="Terms " fontFamily={"semiBold"} fontSize={11} />
            <CustomText label="& " fontFamily={"light"} fontSize={11} />
            <CustomText label="Privacy Policy" fontFamily={"semiBold"} fontSize={11} />

          </View>
        </View>
      </Center>
    </Container>
  );
};

const Container = styled(View, {
  display: "flex",
  width: "100%",
  padding: 20,
  flex: 1,
  // backgroundColor: "red"
});

const Center = styled(View, {
  alignItems: "center",
  justifyContent: "center",
});

const BottomShadow = styled(View, {
  shadowOffset: { width: 6, height: 20 },
  shadowColor: "#100C3E",
  shadowOpacity: 0.4,
  shadowRadius: 10,
  elevation:10
  
});

export default Welcome;

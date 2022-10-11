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
import { Shadow } from 'react-native-shadow-2';

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
          <Spacer height={Platform.OS == "ios" ? 18 : 5} />
          <Image source={gallery.splashImage} style={{ zIndex: 10 }} />
          {Platform.OS == "ios" ? <></> : <Shadow style={{ position: "absolute" }} distance={20} offset={[5, -225]}>
            <Spacer height={200} width={230} />
          </Shadow>}
        </BottomShadow>

        <Spacer height={Platform.OS == "ios" ? 40 : 25} />
        <CustomText
          label={"AI Generated Art"}
          color={colors.darkBlack}
          fontSize={"25"}
          fontFamily={"bold"}
        />
        <CustomText
          label={"Living in Your Home"}
          marginTop={Platform.OS == "ios" ? -8 : -14}
          color={colors.darkBlack}
          fontSize={"25"}
          fontFamily={"regular"}
        />

        <Spacer height={Platform.OS == "ios" ? 30 : 20} />

    
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

        <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 40 }}>
          <View>
            <CustomText
              label="By continuing you agree to our"
              fontFamily={"light"}
              fontWeight={Platform.OS == "ios" ? "700" : "500"}
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
  // height:285,
  // width:250,
  shadowOffset: { width: 6, height: 20 },
  shadowColor: "#100C3E",
  shadowOpacity: 0.4,
  shadowRadius: 10,
  // elevation: 5,
  // backgroundColor: '#eee'

});

export default Welcome;

import { View, Text } from "react-native";
import React from "react";
import styled from "react-native-styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../../Utils/Colors";
import CustomText from "../../../../Components/CustomText";
import CustomTextInput from "../../../../Components/CustomTextInput";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { Spacer } from "../../../../Components/Spacer";
import { verticalScale } from "react-native-size-matters";
import DaysContainer from "./DaysContainer";
import GradientForm from "./GradientForm";

const MainBody = () => {
  return (
    <>
      <LinearGradient
        colors={["#2A2D32", "#221F1F"]}
        style={{ height: "100%" }}
      >
        <MainPortion>
          <PaddingtoLeft>
            <CustomText
              label={"Show Name"}
              color={colors.white}
              fontSize={12}
              marginBottom={6}
            />
          </PaddingtoLeft>
          <Searching>

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
            >
              <View>
                <View style={{ alignItems: "center" }}>
                  <CustomTextInput
                    SelfAlign={"center"}
                    backgroundColor={colors.lightBlack}
                    borderWidth={1}
                    borderColor={colors.black}
                    width={"80%"}
                    height={63}
                    borderRadius={10}
                    placeholder={"Select your favoirte tv shows"}
                    placeholderTextColor={colors.gray}
                    color={colors.white}
                    keyboardType="numbers-and-punctuation"
                    search
                    mic
                  />
                </View>
              </View>
            </LinearGradient>


            <SecondForm>
              <View style={{ alignItems: "center" }}>
                <FormUpperText>
                  <CustomText
                    label={"Episode"}
                    color={colors.white}
                    fontSize={12}
                  />
                </FormUpperText>

                <GradientForm
                  mainWidth={"85%"}
                  inputWidth={"40%"}
                  placeholder={"Select"}
                  playCircle
                  downArrow
                />
              </View>
              <View style={{ alignItems: "center" }}>
                <FormUpperText>
                  <CustomText
                    label={"Channel"}
                    color={colors.white}
                    fontSize={12}
                  />
                </FormUpperText>
                <GradientForm
                  mainWidth={"85%"}
                  inputWidth={"40%"}
                  placeholder={"Select"}
                  tv
                  downArrow
                />
              </View>
            </SecondForm>

            <Spacer height={verticalScale(7)} />

            <PaddingtoLeft>
              <CustomText
                label={"Date & Time"}
                color={colors.white}
                fontSize={12}
                marginBottom={6}
              />
            </PaddingtoLeft>

            <GradientForm
              mainWidth={"100%"}
              inputWidth={"75%"}
              placeholder={"Select Date and show time"}
              keyboardType={"numbers-and-punctuation"}
              calendar
            />
          </Searching>
          <SecondForm>
            <View style={{ alignItems: "center" }}>
              <FormUpperText>
                <CustomText
                  label={"Begin"}
                  color={colors.white}
                  fontSize={12}
                />
              </FormUpperText>
              <GradientForm
                  mainWidth={"85%"}
                  inputWidth={"40%"}
                placeholder={"Select"}
                calendarClock
                downArrow
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <FormUpperText>
                <CustomText
                  label={"Finish"}
                  color={colors.white}
                  fontSize={12}
                  fontWeight={"600"}
                />
              </FormUpperText>
              <GradientForm
                  mainWidth={"85%"}
                  inputWidth={"40%"}
                placeholder={"Select"}
                calendarClock
                downArrow
              />
            </View>
          </SecondForm>
          <DaysContainer />
        </MainPortion>
      </LinearGradient>
    </>
  );
};

const MainPortion = styled(View, {
  width: "100%",
  padding: 20,
});

const Mic = styled(View, {
  backgroundColor: colors.lightBlack,
  borderRadius: 50,
  height: 40,
  width: 40,
  justifyContent: "center",
  alignItems: "center",
});

const Searching = styled(View, {
  display: "flex",
  justifyContent: "space-evenly",
});

const SecondForm = styled(View, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginTop: 10,
});

const FormUpperText = styled(View, {
  alignSelf: "flex-start",
  paddingLeft: 20,
  marginBottom: 8,
});

const PaddingtoLeft = styled(View, {
  paddingLeft: 4,
});

export default MainBody;

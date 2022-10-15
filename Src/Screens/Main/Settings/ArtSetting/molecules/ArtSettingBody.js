import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { verticalScale } from "react-native-size-matters";
import CustomText from "../../../../../Components/CustomText";
import { Spacer } from "../../../../../Components/Spacer";
import styled from "react-native-styled-components";
import { colors } from "../../../../../Utils/Colors";
import CustomButton from "../../../../../Components/CustomButton";
import RnRangeSlider from "rn-range-slider";
import { Slider } from "react-native-elements";
// import Slider from "@react-native-community/slider";

const ArtSettingBody = () => {
  return (
    <View>
      <Spacer height={verticalScale(120)} />
      <Container>
        <View style={{ width: "100%", paddingHorizontal: 50 }}>
          <CustomText
            label="What art would you like
          to see more often?"
            color={colors.pureBlack}
            fontFamily={"regular"}
            fontSize={"14"}
            alignSelf="center"
            align="center"
            textAlign="center"
          />
        </View>
        <Spacer height={verticalScale(40)} />

        {/* <Slider
          maximumValue={50}
          minimumValue={20}
          step={1}
          trackStyle={{
            borderRadius: 20,
            height: 32,
            backgroundColor: colors.white1,
          }}
          thumbStyle={{
            borderWidth: 12,
            borderColor: colors.pureBlack,
            height: 40,
            width: 40,
            backgroundColor: colors.white,
          }}
        /> */}
        <View style={{width:"100%", paddingHorizontal:19}}>
        <Slider
          maximumValue={50}
          minimumValue={20}
          // maximumTrackTintColor={colors.white1}
          minimumTrackTintColor={colors.darkBlack}
          step={1}
          trackStyle={{
            borderRadius: 20,
            height: 35,
            backgroundColor: colors.white1,
          }}
          thumbStyle={{
            borderWidth: 12,
            borderColor: colors.gray6,
            height: 40,
            width: 40,
            backgroundColor: colors.white,
          }}
        />
        </View>

        <Spacer height={verticalScale(10)} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 18,
          }}
        >
          <View>
            <CustomText fontSize={11} label={"public Art"} fontFamily={"bold"} />
            <CustomText fontSize={11}  label={"50%"} fontFamily={"bold"} />
          </View>

          <View>
            <CustomText fontSize={11}  label={"My Collection"} fontFamily={"bold"} />
            <CustomText 
            fontSize={11} 
              alignSelf={"flex-end"}
              label={"50%"}
              fontFamily={"bold"}
            />
          </View>
        </View>

        <Spacer height={verticalScale(130)} />

        <CustomButton
          title="Save"
          fontSize={16}
          borderRadius={17}
          height={55}
          backgroundColor={colors.black}
        />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: "100%",
    opacity: 1,
    height: 100,
    marginTop: 10,
    paddingVertical: 40,
    backgroundColor: "blue",
  },
});

const Container = styled(View, {
  width: "100%",
  paddingHorizontal: 20,
  // backgroundColor:
});

const BlackBox = styled(View, {
  width: 62,
  height: 28,
  top: 150,
  borderRadius: 6,
  backgroundColor: colors.black,
});

const LineContainer = styled(View, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const TopLine = styled(View, {
  width: 20,
  height: 2,
  backgroundColor: colors.black,
});

const CenteredLine = styled(View, {
  width: 35,
  height: 2,
  top: 145,
  backgroundColor: colors.black,
});

const StraightLine = styled(View, {
  width: 2,
  height: 300,
  backgroundColor: colors.black,
});

const BottomLine = styled(View, {
  width: 20,
  height: 2,
  backgroundColor: colors.black,
});

export default ArtSettingBody;

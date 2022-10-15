import { View, Text } from "react-native";
import React from "react";
import CustomText from "../../../../../Components/CustomText";
import { colors } from "../../../../../Utils/Colors";

import { Spacer } from "../../../../../Components/Spacer";
import { moderateScale, verticalScale } from "react-native-size-matters";
import CustomButton from "../../../../../Components/CustomButton";
import styled from "react-native-styled-components";

const DisplayBody = () => {
  return (
    <View>
      <CustomText
        fontFamily={"light"}
        label={"Change Image Every"}
        alignSelf={"center"}
        fontSize={16}
        color={colors.pureBlack}
      />
      <Spacer height={verticalScale(20)} />
      <MainBody>
        <InnerBody>
          <CustomText
            fontFamily={"bold"}
            fontSize={18}
            color={colors.gray3}
            label={"15"}
            alignSelf={"center"}
          />
        </InnerBody>
        <View style={{ alignSelf: "center", justifyContent: "center" }}>
          <CustomText
            color={colors.gray4}
            fontSize={13}
            label={"Seconds"}
            alignSelf={"center"}
          />
        </View>
      </MainBody>
      <Spacer height={verticalScale(20)} />
      <CustomText
        fontFamily={"light"}
        label={"on my Display"}
        alignSelf={"center"}
        fontSize={16}
        color={colors.pureBlack}
      />

      <Spacer height={verticalScale(150)} />
      <View style={{ width: "100%", padding: 20 }}>
        <CustomButton
          title="Save"
          fontSize={16}
          borderRadius={17}
          height={55}
          backgroundColor={colors.black}
        />
      </View>
    </View>
  );
};

const MainBody = styled(View, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%",
  paddingHorizontal: 110,
});

const InnerBody = styled(View, {
  backgroundColor: colors.white,
  height: verticalScale(45),
  width: moderateScale(65),
  alignSelf: "center",
  justifyContent: "center",
  borderRadius: 15,
});

export default DisplayBody;

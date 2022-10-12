import { View, Text } from "react-native";
import React from "react";
import { verticalScale } from "react-native-size-matters";
import CustomText from "../../../../Components/CustomText";
import { Spacer } from "../../../../Components/Spacer";
import styled from "react-native-styled-components";
import { colors } from "../../../../Utils/Colors";
import CustomButton from "../../../../Components/CustomButton";
import Draggable from 'react-native-draggable';

const ArtSettingBody = () => {
  return (
    <View>
      <Spacer height={verticalScale(20)} />
      <Container>
        <CustomText
          label="Choose the % of time public art 
              vs your collection displayed"
          fontFamily={"regular"}
          fontSize={"16"}
          alignSelf="center"
          align="center"
          textAlign="center"
        />
        <Spacer height={verticalScale(22)} />
        <CustomText
          label="Show Public Art (50%)"
          fontFamily={"bold"}
          fontSize={"21"}
          alignSelf="center"
          align="center"
          textAlign="center"
        />
        <Spacer height={verticalScale(22)} />
        <LineContainer>
          <View style={{flex:1, width:1, height:1}}>
            <Draggable
              x={-26}
              y={118}
              renderSize={50}
              renderColor="black"
              renderText=""
              minX={-26}
              minY={1}
              maxX={20}
              maxY={306}
            />
            </View>
          <CenteredLine />
          <TopLine />
          <StraightLine />
          <BottomLine />
        </LineContainer>

        <Spacer height={verticalScale(22)} />
        <CustomText
          label="Show My Collection (50%)"
          fontFamily={"bold"}
          fontSize={"19"}
          alignSelf="center"
          align="center"
          textAlign="center"
        />

        <Spacer height={verticalScale(28)} />

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

const Container = styled(View, {
  width: "100%",
  paddingHorizontal: 30,
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

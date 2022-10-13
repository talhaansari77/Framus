import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../../../../Components/CustomText";
import styled from "react-native-styled-components";
import Feather from "react-native-vector-icons/Feather";
import { verticalScale } from "react-native-size-matters";

const DisplayHeader = ({onPress}) => {
  return (
    <Container>
      <Row>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ alignSelf: "center" }}
          onPress={onPress}
        
        >
          <Feather name="chevron-left" size={verticalScale(22)} />
        </TouchableOpacity>
        <View style={{ width: "50%" }}>
          <CustomText
            label={"Display Timer"}
            fontSize={18}
            fontFamily={"bold"}
          />
        </View>
        <View></View>
      </Row>
    </Container>
  );
};

const Container = styled(View, {
  width: "100%",
  padding: 10,
});

const Row = styled(View, {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 20,
});

export default DisplayHeader;

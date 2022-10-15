import { View, Text, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import CustomText from "../../../../Components/CustomText";
import styled from "react-native-styled-components";
import { verticalScale } from "react-native-size-matters";

const SignupHeader = ({ navigation, fromSetting }) => {
  return (
    <Row>
      {fromSetting ? (
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ flex: 1 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="chevron-left" size={verticalScale(25)} />
        </TouchableOpacity>
      ) : null}

      {fromSetting ? (
        <View style={{ width: "50%", flex: 2.5 }}>
          <CustomText label={"My Account"} fontSize={20} fontFamily={"bold"} />
        </View>
      ) : (
        <View style={{width:"100%"}}>
        <CustomText
          label={"Profile"}
          fontSize={20}
          fontFamily={"bold"}
          alignSelf={"center"}
        />
        </View>
      )}

      <View></View>
    </Row>
  );
};

const Row = styled(View, {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 20,
});

export default SignupHeader;

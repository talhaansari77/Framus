import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../../../../Components/CustomText";
import styled from "react-native-styled-components";
import Feather from "react-native-vector-icons/Feather";
import { verticalScale } from "react-native-size-matters";

const SettingHeader = ({ navigation }) => {
  return (
    <Row>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{alignSelf: "center", flex:1}}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Feather
          name="chevron-left"
          size={verticalScale(25)}
        />
      </TouchableOpacity>
      <View style={{ width: "50%", flex:2 }}>
        <CustomText label={"Settings"} fontSize={20} fontFamily={"bold"} />
      </View>
      <View></View>
    </Row>
  );
};

const Row = styled(View, {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 20,
});

export default SettingHeader;

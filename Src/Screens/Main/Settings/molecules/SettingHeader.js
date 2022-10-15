import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../../../../Components/CustomText";
import styled from "react-native-styled-components";
import Feather from "react-native-vector-icons/Feather";
import { verticalScale } from "react-native-size-matters";
import { colors } from "../../../../Utils/Colors";

const SettingHeader = ({ navigation,onPress }) => {
  return (
    <Row>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{alignSelf: "center", flex:1}}
        onPress={onPress}
      >
        <Feather
          name="chevron-left"
          size={verticalScale(22)}
        />
      </TouchableOpacity>
      <View style={{  flex:1.6 }}>
        <CustomText label={"Settings"} fontSize={18}
        color={colors.black}
         fontFamily={"bold"} />
      </View>
      <View></View>
    </Row>
  );
};

const Row = styled(View, {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 10,
  paddingTop:verticalScale(10)
});

export default SettingHeader;

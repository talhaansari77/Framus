import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import CustomText from "../../../../Components/CustomText";
import { verticalScale } from "react-native-size-matters";
import styled from "react-native-styled-components";
import { Spacer } from "../../../../Components/Spacer";

const NotificationHeader = ({onBack}) => {
  return (
    <SafeAreaView>
    <Row>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{ paddingLeft: 10 }}
        onPress={onBack}
      >
        <Feather name="chevron-left" size={verticalScale(25)} />
      </TouchableOpacity>
      <View style={{ width: "50%" }}>
        <CustomText label={"Notifications"} fontSize={18} fontFamily={"bold"} />
      </View>
      <View></View>
    </Row>
    </SafeAreaView>
  );
};

const Row = styled(View, {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 20
});

export default NotificationHeader;

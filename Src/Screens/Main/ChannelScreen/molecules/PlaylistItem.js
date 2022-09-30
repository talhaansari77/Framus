import { View, Text, Image, Platform } from "react-native";
import React from "react";
import Channels from "../../../../../Assets/Channels";
import styled from "react-native-styled-components";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../Components/CustomText";
import { colors } from "../../../../Utils/Colors";
import { Spacer } from "../../../../Components/Spacer";
import Entypo from "react-native-vector-icons/Entypo";

const PlaylistItem = () => {
  return (
    <VideoDetail>
      <Image source={Channels.Thumbnail} style={thumbnailSize} />
      <Spacer width={10} />
      <Row>
        <View style={{ width: Platform.OS === "android" ? "65%" : "70%" }}>
          <Spacer height={2} />
          <CustomText
            label={"Never Have I Ever | Official Trailer| Netflix"}
            color={colors.white}
            fontSize={12}
          />
          <CustomText
            label={"Netflix"}
            color={colors.gray1}
            fontSize={9}
            marginLeft={3}
          />
          <CustomText
            label={"120K views - 10 days ago"}
            color={colors.gray1}
            fontSize={9}
            marginLeft={3}
          />
        </View>
        <View style={{ marginTop: 5 }}>
          <Entypo name={"dots-three-vertical"} color={colors.white} size={14} />
        </View>
      </Row>
    </VideoDetail>
  );
};

export default PlaylistItem;

const VideoDetail = styled(View, {
  // paddingHorizontal: scale(20),
  // paddingVertical: verticalScale(5),
  flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
});
const Row = styled(View, {
  // paddingHorizontal: scale(20),
  // paddingVertical: verticalScale(5),
  flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
});
const thumbnailSize = {
  width: 158,
  height: 94,
};

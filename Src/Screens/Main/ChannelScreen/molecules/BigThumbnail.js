import { View, Text, Image } from "react-native";
import React from "react";
import Channels from "../../../../../Assets/Channels";
import styled from "react-native-styled-components";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../Components/CustomText";
import { colors } from "../../../../Utils/Colors";
import { Spacer } from "../../../../Components/Spacer";
import commonStyles from "../../../../Utils/CommonStyles";

const BigThumbnail = () => {
  return (
    <View>
      <Image source={Channels.BigThumbnail} style={h153} />
      <VideoDetail>
        <ChannelIcon>
          <Image source={Channels.logo} resizeMode="contain" />
        </ChannelIcon>
        <Spacer width={10} />
        <View>
          <CustomText
            label={"Lock & Key: Season 3 | Official Trailer | Netflix"}
            color={colors.white}
            fontSize={11}
          />
          <CustomText
            label={"Netflix - 2.7M views - 3 weeks ago"}
            color={colors.white}
            fontSize={9}
            marginLeft={3}
          />
        </View>
      </VideoDetail>
    </View>
  );
};

export default BigThumbnail;

const VideoDetail = styled(View, {
  paddingHorizontal: scale(20),
  paddingVertical: verticalScale(5),
  flexDirection: "row",
  alignItems: "center",
  //   justifyContent: "space-between",
});
const ChannelIcon = styled(View, {
  height: 40,
  width: 40,
  borderRadius: 20,
  backgroundColor: "red",
  overflow: "hidden",
});
const h153 = {
  height: 153,
  width: "100%",
};

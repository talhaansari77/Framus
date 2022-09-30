import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomText from "../../../../Components/CustomText";
import { colors } from "../../../../Utils/Colors";
import Channels from "../../../../../Assets/Channels";
import styled from "react-native-styled-components";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../Components/Spacer";
import { useNavigation } from "@react-navigation/native";

const channelList = [
  { id: 1, name: Channels.Netflix, label: "Netflix" },
  { id: 2, name: Channels.YouTube, label: "YouTube" },
  { id: 3, name: Channels.Hulu, label: "Hulu" },
  { id: 4, name: Channels.Disnep, label: "Disney plus" },
  { id: 5, name: Channels.AmazonPrime, label: "Amazon Prime" },
  // {id:6,name:Channels.Colors, label:"Colors"},
  { id: 7, name: Channels.Netflix, label: "Netflix" },
];
const FavChannelList = [
  { id: 1, name: Channels.FavNet, label: "NetFlix" },
  { id: 2, name: Channels.Roku, label: "Roku" },
  { id: 3, name: Channels.Roku, label: "Colors" },
];
const ChannelTv = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <MainChannel>
        <ChannelHeader>
          {/* <Text style={{fontWeight:"bold",fontSize:20,color:colors.white}}>Tv Channel</Text> */}
          <CustomText
            label="Tv Channel"
            fontSize={"15"}
            fontFamily={"mediun"}
            color={colors.white}
          />

          <CustomText
            fontSize={"12"}
            color={colors.gray}
            fontFamily={"mediun"}
            marginTop="5"
          >
            See All{" "}
          </CustomText>
        </ChannelHeader>

        <Channel>
          {channelList.map((channel) => (
            <ChannelContainer
              activeOpacity={0.7}
              onPress={() => navigation.navigate("ChannelScreen")}
            >
              <ChannelImageCon>
                <Image
                  source={channel.name}
                  resizeMode={"stretch"}
                  style={hw100}
                />
              </ChannelImageCon>
              <ChannelNameContainer>
                <CustomText
                  label={channel.label}
                  fontSize={16}
                  color={colors.white}
                />
              </ChannelNameContainer>
            </ChannelContainer>
          ))}
        </Channel>
        <Spacer height={10} />
        <CustomText
          label={"Favorite Tv Channels"}
          fontSize={"15"}
          fontFamily={"mediun"}
          fontWeight="bold"
          color={colors.white}
        />
        <Spacer height={10} />
      </MainChannel>
      <PL20>
        <ScrollView horizontal>
          {FavChannelList.map((channel) => (
            <>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={w100}>
                  <Image source={channel.name} resizeMode={"cover"} />
                </View>
                <ChannelNameContainer>
                  <CustomText
                    label={channel.label}
                    fontSize={16}
                    color={colors.white}
                  />
                </ChannelNameContainer>
              </TouchableOpacity>
              <Spacer width={10} />
            </>
          ))}
        </ScrollView>
      </PL20>
      <Spacer height={20} />
    </ScrollView>
  );
};

const MainChannel = styled(View, {
  width: "100%",
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,

  // padding: 20,
});
const PL20 = styled(View, {
  width: "100%",
  paddingLeft: 10,
});

const ChannelHeader = styled(View, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const Channel = styled(View, {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 10,
  justifyContent: "space-between",
  // paddingRight: 20,
});
const ChannelContainer = styled(TouchableOpacity, {
  width: Dimensions.get("window").width / 2.2,
  marginVertical: verticalScale(5),
  backgroundColor: colors.lightBlack,
  borderRadius: 10,
});
const ChannelNameContainer = styled(View, {
  backgroundColor: colors.lightBlack,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});
const ChannelImageCon = styled(View, {
  width: "100%",
  height: verticalScale(80),
});
const hw100 = {
  width: "100%",
  height: "100%",
};
const w100 = {
  width: "100%",
  height: "30%",
};

export default ChannelTv;

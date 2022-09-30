import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Banner from "./Banner";
import styled from "react-native-styled-components";
import { colors } from "../../../../Utils/Colors";
import Channels from "../../../../../Assets/Channels";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../Components/CustomText";
import CustomButton from "../../../../Components/CustomButton";
import CustomGradientButton from "../../../../Components/CustomGradientButton";
import Entypo from "react-native-vector-icons/Entypo";
import BigThumbnail from "./BigThumbnail";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { Spacer } from "../../../../Components/Spacer";
import PlaylistItem from "./PlaylistItem";
import { Line } from "../../Profile/Profile";

const TopHome = () => {
  return (
    <Container>
      {/* <ScrollView> */}
      <Line elevation={5} />
      <ScrollView>
        <Spacer height={2} />

        <Banner />

        <ChannelStatus>
          <Center>
            <CustomText
              label={"10.5 M"}
              color={colors.white}
              fontFamily={"inter"}
            />
            <CustomText
              label={"Subscribers"}
              color={colors.white}
              fontFamily={"inter"}
            />
          </Center>
          <View>
            <MainLogo>
              <Image source={Channels.logo} />
            </MainLogo>
            <CustomGradientButton
              title={"Subscribe"}
              fontSize={14}
              width={100}
              height={35}
              color1={"#B13025"}
              color2={"#79281E"}
            />
          </View>
          <Center>
            <CustomText
              label={"6.10 k"}
              color={colors.white}
              fontFamily={"inter"}
            />
            <CustomText
              label={"Videos"}
              color={colors.white}
              fontFamily={"inter"}
            />
          </Center>
        </ChannelStatus>
        <ChannelDescription>
          <CustomText
            label={
              "Netflix, Inc. is an American subscription streaming service and production company based in Los Gatos, California"
            }
            color={colors.white}
            fontFamily={"inter"}
            textAlign={"center"}
            fontSize={8}
          ></CustomText>
          <View
            style={{
              marginTop: verticalScale(10),
              marginLeft: verticalScale(-20),
            }}
          >
            <Entypo name={"chevron-right"} color={colors.gray1} size={16} />
          </View>
        </ChannelDescription>
        <BigThumbnail />
        <Divider color={colors.gray} />
        <Spacer height={10} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Playlist>
            <CustomText
              label={"New in August 2022 | Netflix"}
              color={colors.white}
              fontFamily={"inter"}
              fontWeight={"bold"}
              fontSize={16}
            />
            <Spacer height={10} />

            {[1, 2, 3, 4, 5].map((item, index) => (
              <>
                <PlaylistItem key={index} />
                <Spacer height={10} />
              </>
            ))}
          </Playlist>
        </ScrollView>
      </ScrollView>
      {/* </ScrollView> */}
    </Container>
  );
};

export default TopHome;

const Container = styled(View, {
  backgroundColor: colors.black,
  flex: 1,
});
const MainLogo = styled(View, {
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: verticalScale(4),
});
const ChannelStatus = styled(View, {
  flexDirection: "row",
  alignItems: "flex-end",
  justifyContent: "space-between",
  paddingHorizontal: scale(20),
});
const Center = styled(View, {
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: verticalScale(4),
});
const ChannelDescription = styled(View, {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: scale(35),
  paddingVertical: verticalScale(4),
  flexDirection: "row",
});
const Playlist = styled(View, {
  justifyContent: "center",
  paddingHorizontal: scale(20),
  //   backgroundColor: "red",
});

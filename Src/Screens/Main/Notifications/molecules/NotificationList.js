import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styled from "react-native-styled-components";
import { colors } from "../../../../Utils/Colors";
import icons from "../../../../../Assets/Icons";
import { FlatList } from "react-native-gesture-handler";
import profile from "../../../../../Assets/Profile";
import CustomButton from "../../../../Components/CustomButton";
import CustomText from "../../../../Components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";
import FollowBtn from "./FollowBtn";
import commonStyles from "../../../../Utils/CommonStyles";

const NotificationList = () => {
  const notificationArray = [
    {
      id: 1,
      logo: icons.glass,
      primaryNotice: "Congrats! Your artwork was approved!",
      secondaryNotice: "",
      time: "1wk ago",
      notifyButton: profile.image2,
    },

    {
      id: 2,
      logo: icons.celebrate,
      primaryNotice: "Congrats! Your artwork was approved!",
      secondaryNotice: "",
      time: "1wk ago",
      notifyButton: profile.image2,
    },
    {
      id: 3,
      logo: icons.emojie,
      primaryNotice: "Congrats! Your artwork was approved!",
      secondaryNotice: "",
      time: "1wk ago",
      notifyButton: profile.image2,
    },
    {
      id: 4,
      logo: icons.tick,
      primaryNotice: "Your artwork was submitted for approval",
      secondaryNotice: "We’ll notify you once its approved.",
      time: "1mo ago",
      notifyButton: profile.image2,
    },
    {
      id: 5,
      logo: profile.image1,
      primaryNotice: "Congrats! Your artwork was approved!",
      secondaryNotice: "Secondary",
      time: "1wk ago",
      notifyButton: profile.image2,
    },
    {
      id: 6,
      logo: profile.image3,
      primaryNotice: "landonle",
      secondaryNotice: " started following you. ",
      time: "1wk ago",
      follow: "follow",
    },
    {
      id: 7,
      logo: profile.image3,
      primaryNotice: "Congrats! Your artwork was approved!",
      secondaryNotice: "Secondary",
      time: "1wk ago",
      notifyButton: profile.image7,
    },
    {
      id: 8,
      logo: profile.image1,
      primaryNotice: "christophermontgomery",
      secondaryNotice: "started following you.",
      time: "1wk ago",
      follow: "follow",
    },
    {
      id: 9,
      logo: profile.image4,
      primaryNotice: "sandydates",
      secondaryNotice: "added your artwork",
      time: "1wk ago",
      notifyButton: profile.image5,
    },
    {
      id: 10,
      logo: profile.image4,
      primaryNotice: "sandydates",
      secondaryNotice: "added your artwork to their ",
      time: "1wk ago",
      notifyButton: profile.image6,
    },
    {
      id: 11,
      logo: profile.image4,
      primaryNotice: "sandydates",
      secondaryNotice: "umairabbas",
      time: "1wk ago",
      // following: null,
    },
  ];
  return (
    <Container>
      <FlatList
        data={notificationArray}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          console.log(item.time);
          return (
            <View>

            <MainFlatHeader>
                <View
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 99,
                      overflow: "hidden",
                      // marginTop:verticalScale(5)
                    }}
                  >
                      <Image
                source={item.logo}
                resizeMode="cover"
                style={commonStyles.img}
              />

                  </View>
            
              <TextBody>
                <CustomText
                  fontFamily={"semiBold"}
                  label={item.primaryNotice}
                  marginRight={2}
                />
                <CustomText label={item.secondaryNotice}
                                  marginRight={2}


                 />
                <CustomText color={colors.gray2} label={item.time} />
              </TextBody>
              <View >
                {item.notifyButton ? (
                  <View
                    style={{
                      width: 45,
                      height: 47,
                      borderRadius: 5,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      source={item.notifyButton}
                      resizeMode="cover"
                      style={commonStyles.img}
                    />
                  </View>
                ) : item.follow ? (
                  <FollowBtn label={"Follow"} color={colors.white} />
                ) : (
                  <FollowBtn
                    label={"Following"}
                    backgroundColor={colors.white}
                    color={colors.black}
                    borderColor={colors.black}
                    borderWidth={1}
                  />
                )}
              </View>
            </MainFlatHeader>
            <View style={{height:1,width:"100%",backgroundColor:colors.white1}}></View>
            </View>

          );
        }}
      />
    </Container>
  );
};
{
  /* <FollowBtn label={"Follow"} color={colors.white} /> */
}

const MainFlatHeader = styled(View, {
  display: "flex",
  flexDirection: "row",
  paddingVertical: verticalScale(10),
  flex: 1,
});

const Container = styled(View, {
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: colors.white,
  padding: 10,
  flex: 1,
});

const TextBody = styled(View, {
  flex: 8,
  paddingHorizontal: scale(10),
  display: "flex",
  flexDirection: "row",
  aliginItems:"center",
  flexWrap: "wrap",
  alignSelf: "center",
});

export default NotificationList;

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

const NotificationList = () => {
  const [follow, setFollow] = useState(false);

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
      notifyButton: "",
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
      notifyButton: "",
    },
    {
      id: 9,
      logo: profile.image4,
      primaryNotice: "sandydates",
      secondaryNotice: "added your artwork to their collection.",
      time: "1wk ago",
      notifyButton: profile.image5,
    },
    {
      id: 10,
      logo: profile.image4,
      primaryNotice: "sandydates",
      secondaryNotice: "added your artwork to their collection.",
      time: "1wk ago",
      notifyButton: profile.image6,
    },
    {
      id: 10,
      logo: profile.image4,
      primaryNotice: "sandydates",
      secondaryNotice: "added your artwork to their collection.",
      time: "1wk ago",
      notifyButton: "",
    },
  ];

  return (
    <Container>
      <FlatList
        data={notificationArray}
        renderItem={({ item }) => {
          console.log(item.time);
          return (
            <MainFlatHeader>
              <Image
                source={item.logo}
                resizeMode="cover"
                style={{ width: 35, height: 35, alignSelf: "center" }}
              />
              <TextBody>
                <CustomText
                  fontFamily={"semiBold"}
                  label={item.primaryNotice}
                />
                <CustomText label={item.secondaryNotice} />
                <CustomText color={colors.gray2} label={item.time} />
              </TextBody>
              <View style={{ flex: item.notifyButton ? "1.2" : "" }}>
                {item.notifyButton ? (
                  <Image
                    source={item.notifyButton}
                    resizeMode="cover"
                    style={{ width: 45, height: 45 }}
                  />
                ) : setFollow ? (
                  <CustomButton
                    title={"Follow"}
                    width={95}
                    paddingVertical={9}
                    fontSize={12}
                    color={colors.white}
                    backgroundColor={colors.pureBlack}
                  />
                ) : (
                  <CustomButton
                    title={"Following"}
                    width={110}
                    paddingVertical={9}
                    fontSize={12}
                    color={colors.black}
                    borderColor={colors.black}
                    borderWidth={1}
                    // backgroundColor={colors.white}
                  />
                )}
              </View>
            </MainFlatHeader>
          );
        }}
      />
    </Container>
  );
};

const MainFlatHeader = styled(View, {
  display: "flex",
  flexDirection: "row",
  paddingVertical: verticalScale(10),
});

const Container = styled(View, {
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: colors.white,
  padding: 10,
});

const TextBody = styled(View, {
  flex: "8",
  paddingHorizontal: scale(10),
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignSelf: "center",
});

export default NotificationList;

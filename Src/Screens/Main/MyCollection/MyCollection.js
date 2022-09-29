import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import React from "react";
import styled from "react-native-styled-components";
import icons from "../../../../Assets/Icons";
import gallery from "../../../../Assets/Gallery";
import CustomText from "../../../Components/CustomText";
import CustomButton from "../../../Components/CustomButton";
import { colors } from "../../../Utils/Colors";
import { Spacer } from "../../../Components/Spacer";
import {
  ScaledSheet,
  verticalScale,
  scale,
  moderateScale,
} from "react-native-size-matters";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MyCollectionGallery from "./molecules/MyCollectionGallery";
// import { BlurView } from "@react-native-community/blur";

const MyCollection = () => {
  const dataImage = ["#333", "#FF6633", "#FFB399", "#FF3399", "#99FF99"];
  // const dataImage = [
  //   <Image
  //     resizeMode={"cover"}
  //     style={{ height: 220, width: "100%" }}
  //     source={gallery.galleryMainImage04}
  //     blurRadius={0}
  //   />,

  //   <Image
  //     resizeMode={"cover"}
  //     style={{ height: 220, width: "100%" }}
  //     source={gallery.galleryMainImage04}
  //     blurRadius={0}
  //   />,

  //   <Image
  //     resizeMode={"cover"}
  //     style={{ height: 220, width: "100%" }}
  //     source={gallery.galleryMainImage04}
  //     blurRadius={0}
  //   />,
  // ];

  return (
    <Container>
      <SafeAreaView>
        <MyCollections>
          <View
            style={{ alignSelf: "center", paddingHorizontal: 8, marginTop: 7 }}
          >
            {/* <FontAwesome5
            name="bell"
            backgroundColor={colors.black}
            size={22}
          /> */}
            <View>
              <Image
                source={icons.bellIcon}
                style={{ height: 23, width: 35 }}
                resizeMode={"contain"}
              />
            </View>

            <IconNumber
            >
              <CustomText
                label="12"
                fontSize={8}
                alignSelf={"center"}
                fontFamily={"regular"}
                color={colors.white}
              />
            </IconNumber>
          </View>

          <View>
            <CustomText
              label="My Collection"
              fontFamily={"bold"}
              fontSize={20}
              color={colors.black}
            />
          </View>

          <View style={{ alignSelf: "center" }}>
            <Image
              source={icons.settingIcon}
              style={{ height: 20, width: 35 }}
              resizeMode={"contain"}
              marginBottom={4}
            />
          </View>
        </MyCollections>
      </SafeAreaView>
      <View style={{ backgroundColor: "red", height: 230 }}>
        <FlatList
          data={dataImage}
          keyExtractor={(item) => String(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"start"}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: item,
                height: 220,
                width: "100%",
                marginHorizontal: 10,
                borderRadius: 12,
              }}
            />
          )}
        />
      </View>

      <Spacer height={10} />
      <MyCollections>
        <ArrowButton>
          <Entypo name="chevron-small-left" size={27} />
        </ArrowButton>

        <View style={{ alignSelf: "center" }}>
          <AntDesign name="hearto" size={27} />
        </View>

        <ArrowButton >
          <Entypo name="chevron-small-right" size={27} />
        </ArrowButton>
      </MyCollections>

      {/* <View> */}

      {/* <View
        style={{
          width: "100%",
          height: 220,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: moderateScale(12),
        }}
      >
        <View style={{ position: "absolute", width: 152, zIndex: 1000 }}>
          <Image
            resizeMode={"cover"}
            style={{ height: 220, width: "100%" }}
            source={gallery.galleryMainImage04}
            blurRadius={0}
          />
        </View>
        <Image
          source={gallery.galleryMainImage01}
          style={{ width: "130%", height: "100%" }}
          resizeMode={"cover"}
          blurRadius={6}
        />
      </View> */}

      {/* </View> */}
      <Spacer height={20} />
      <MyCollectionGallery />
    </Container>
  );
};

const Container = styled(View, {
  display: "flex",
  width: "100%",
  padding: 25,
  flex: 1,
  backgroundColor: "#f3f3f3",
  // backgroundColor: "red",
});

const IconNumber = styled(View, {
  width: 18,
  height: 18,
  borderRadius: 50,
  backgroundColor: colors.red,
  top: -30,
  left: 20,
  alignItems: "center",
  paddingTop: 1,
});

const ArrowButton = styled(View, {
  borderRadius: 10,
  padding: 13,
  alignItems: "center",
  backgroundColor: colors.white1,
  shadowOffset: { width: 2, height: 3 },
  shadowColor: "#100C3E",
  shadowOpacity: 0.2,
  shadowRadius: 4,
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
});

const Container1 = styled(View, {
  display: "flex",
  width: "100%",
  padding: 45,
  flex: 1,
  backgroundColor: "#f3f3f3",
  // backgroundColor: "red",
});

const MyCollections = styled(View, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export default MyCollection;

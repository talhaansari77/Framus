import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Animated,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState, useRef } from "react";
import styled from "react-native-styled-components";
import icons from "../../../../Assets/Icons";
import gallery from "../../../../Assets/Gallery";
import CustomText from "../../../Components/CustomText";
import { colors } from "../../../Utils/Colors";
import Header from "./molecules/Header";
import * as Animatable from "react-native-animatable";

import { verticalScale, moderateScale } from "react-native-size-matters";

import AntDesign from "react-native-vector-icons/AntDesign";
import MyCollectionGallery from "./molecules/MyCollectionGallery";
import Carousel from "react-native-snap-carousel-v4";
import commonStyles from "../../../Utils/CommonStyles";
import FooterBtn from "./molecules/FooterBtn";
import CarouselContainer from "./molecules/CarouselContainer";
import PlayMusicContainer from "./molecules/PlayMusicContainer";
import PlayContainer from "./molecules/PlayContainer";
export const SLIDER_WIDTH = Dimensions.get("window").width/1;
export const ITEM_WIDTH = SLIDER_WIDTH / 2;
const MyCollection = ({ navigation }) => {
  const [addCollection, setAddCollection] = useState(false);
  const [changeText, setChangeText] = useState("");

  const isCarousel = useRef(null);

  const dataImage = [
    gallery.galleryMainImage01,
    gallery.galleryMainImage02,
    gallery.galleryMainImage03,
  ];
  const CarouselRender = ({ item }) => {
    return (
      <View>
        <CarouselContainer
          item={item}
          onPress={() => {
            navigation.navigate("PlayMusic");
          }}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        paddingTop: Platform.OS == "ios" ? verticalScale(40) : 0,
      }}
    >
      <Header
            addCollection={addCollection}

        changeText={changeText}
        onSetting={() => {
          navigation.navigate("SettingScreen");
        }}
        onNotification={() => {
          navigation.navigate("Notifications");
        }}
      />
      <ScrollView
        style={{ height: "100%" }}
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y > 100) {
            setChangeText("Your Collection");
          } else {
            setChangeText("On Display");
          }

          console.log("ScrolView", e.nativeEvent.contentOffset.y);
        }}
      >
        <View style={styles.headerContainer} >
          <Carousel
            ref={isCarousel}
            layout={"default"}
            data={dataImage}
           
            sliderWidth={SLIDER_WIDTH}
            itemWidth={SLIDER_WIDTH/1.15}
            renderItem={CarouselRender}
          />
          <PlayContainer
            addCollection={addCollection}
            setAddCollection={setAddCollection}
          />
        </View>

        <CustomText
          label={changeText == "Your Collection" ? "" : "Your Collection"}
          fontFamily={"bold"}
          fontSize={17}
          marginTop={10}
          alignSelf={"center"}
          color={colors.black}
        />

        <View style={{ marginHorizontal: 10 }}>
          <MyCollectionGallery />
        </View>
      </ScrollView>
      {addCollection ? (
        <Animatable.View animation="slideInDown" style={styles.addCollection}>
          <AntDesign name="heart" size={24} color={colors.red} />
          <CustomText
            label="Artwork has been added to your collection."
            marginLeft={verticalScale(10)}
            color={colors.white}
            fontSize={verticalScale(8)}
          />
        </Animatable.View>
      ) : (
        <></>
      )}
      {changeText == "Your Collection" ? <PlayMusicContainer changeText={changeText}/> : <></>}

      <FooterBtn
        onPress={() => {
          navigation.navigate("UploadImages");
        }}
      />
    </View>
  );
};

export default MyCollection;
const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: verticalScale(285),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: colors.white,
    paddingTop: verticalScale(10),
    // paddingLeft: 20,
  },
  addCollection: {
    position: "absolute",
    top: 0,
    backgroundColor: colors.collectionBlack,
    marginTop: verticalScale(40),
    height: verticalScale(50),
    width: "96%",
    alignSelf: "center",
    // marginLeft: verticalScale(7),
    borderRadius: moderateScale(15),
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
  },
});

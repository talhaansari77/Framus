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

import { verticalScale, moderateScale } from "react-native-size-matters";

import AntDesign from "react-native-vector-icons/AntDesign";
import MyCollectionGallery from "./molecules/MyCollectionGallery";
import Carousel from "react-native-snap-carousel-v4";
import commonStyles from "../../../Utils/CommonStyles";
import FooterBtn from "./molecules/FooterBtn";
import CarouselContainer from "./molecules/CarouselContainer";
import PlayMusicContainer from "./molecules/PlayMusicContainer";
import PlayContainer from "./molecules/PlayContainer";
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);
const MyCollection = ({ navigation }) => {
  const [addCollection, setAddCollection] = useState(false);

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
      onSetting={()=>{
        navigation.navigate("SettingScreen")

        
      }}
      onNotification={()=>{
        navigation.navigate("Notifications")
        

      }}
       />
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.headerContainer}>
          <Carousel
            ref={isCarousel}
            layout={"default"}
            data={dataImage}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            renderItem={CarouselRender}
          />
          <PlayContainer
            addCollection={addCollection}
            setAddCollection={setAddCollection}
          />
        </View>

        <View
          style={{
            display: "flex",
            alignSelf: "center",
            width: 200,
            height: 30,
            marginTop: verticalScale(10),
          }}
        >
          <Image
            resizeMode="contain"
            source={icons.collectionText}
            style={commonStyles.img}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <MyCollectionGallery />
        </View>
      </ScrollView>
      {addCollection ? (
        <View style={styles.addCollection}>
          <AntDesign name="heart" size={24} color={colors.red} />
          <CustomText
            label="Artwork has been added to your collection."
            marginLeft={verticalScale(10)}
            color={colors.white}
            fontSize={verticalScale(8)}
          />
        </View>
      ) : (
        <></>
      )}
      <PlayMusicContainer />

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
    height: verticalScale(280),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: colors.white,
    paddingLeft: 20,
  },
  addCollection: {
    position: "absolute",
    top: 0,
    backgroundColor: colors.collectionBlack,
    marginTop: verticalScale(40),
    height: verticalScale(50),
    width: "95%",
    marginLeft: 15,
    borderRadius: moderateScale(15),
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
  },
});

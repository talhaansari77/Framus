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
  ScrollView
} from "react-native";
import React, { useState, useRef } from "react";
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
import profile from "../../../../Assets/Profile";
import Carousel from "react-native-snap-carousel-v4";
import commonStyles from "../../../Utils/CommonStyles";
const MyCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const sliderRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const dataImage = [
    gallery.galleryMainImage01,
    gallery.galleryMainImage02,
    gallery.galleryMainImage03,
  ];

  const scrollTo = (pointer) => {
    if (currentIndex < dataImage.length - 1 && pointer === "right") {
      console.log("right", currentIndex);
      sliderRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else if (currentIndex > 0 && pointer === "left") {
      console.log("left", currentIndex);
      sliderRef.current.scrollToIndex({ index: currentIndex - 1 });
    } else {
      console.log("The End", currentIndex);
    }
  };
  return (
    <ScrollView>

    <Container>
      <MyCollections>
        <View
          style={{ alignSelf: "center", paddingHorizontal: 5, marginTop: 10 }}
        >
          <TouchableOpacity activeOpacity={0.6}>
            <View>
              <Image
                source={icons.bellIcon}
                style={{ height: 23, width: 35 }}
                resizeMode={"contain"}
              />
            </View>
          </TouchableOpacity>
          <IconNumber>
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
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ alignSelf: "center", marginRight: 10 }}
        >
          <View>
            <Image
              source={icons.settingIcon}
              style={{ height: 20, width: 35 }}
              resizeMode={"contain"}
              alignSelf={"center"}
              marginBottom={8}
            />
          </View>
        </TouchableOpacity>
      </MyCollections>
      {/* </SafeAreaView> */}
      <View
        style={{
          height: 220,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={dataImage}
          keyExtractor={(item) => String(item)}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewItemsChanged}
          viewabilityConfig={viewConfig}
          ref={sliderRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
          renderItem={({ item }) => (
            // <></>
            <View
              style={{
                // width: "100%",
                height: 220,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: moderateScale(12),
                // backgroundColor: item,
                // width:"100%",
                width: Platform.OS == "ios" ? moderateScale(320) : moderateScale(330),
                marginHorizontal: 5,
                borderRadius: 12,
              }}
            >
              <View style={{ position: "absolute", width: 152, zIndex: 1000 }}>
                <Image
                  // resizeMode={"contain"}
                  style={{ height: 230, width: "100%" }}
                  source={item}
                  blurRadius={0}
                />
              </View>
              <Image
                source={item}
                style={{ width: "130%", height: "100%" }}
                resizeMode={"cover"}
                blurRadius={6}
              />
            </View>
          )}
        />
      </View>
      {/* <Spacer height={10} /> */}
      {/* <MyCollections> */}
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:verticalScale(5)}}>


      <TouchableOpacity 
      // style={{mar}}
          onPress={() => scrollTo("left")}
          >
        <View style={{ display: "flex", alignSelf: "center"}}>
          <Image source={icons.next1} style={{ height: 70, width: 80,marginLeft:-5 }} />
        </View>
      </TouchableOpacity>
      


        <TouchableOpacity activeOpacity={0.6} style={{ alignSelf: "center" }}>
          <View>
            <AntDesign name="hearto" size={27} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => scrollTo("right")}
          >
        <View style={{ display: "flex", alignSelf: "center"}}>
          <Image source={icons.next} style={{ height: 70, width: 80, }} />
        </View>
      </TouchableOpacity>
      </View>


      {/* </MyCollections> */}
      <Spacer height={Platform.OS=="ios"?0: 5} />
      <MyCollectionGallery />
    </Container>
    </ScrollView>

  );
};

const Container = styled(View, {
  display: "flex",
  width: "100%",
  padding: 20,
  flex: 1,
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
  elevation: 10,
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
  // paddingHorizontal:10,
  paddingTop: Platform.OS == "ios" ? verticalScale(15) : 10,
});

export default MyCollection;

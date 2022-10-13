import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
import gallery from "../../../../../Assets/Gallery";
import styled from "react-native-styled-components";
import icons from "../../../../../Assets/Icons";
import CustomText from "../../../../Components/CustomText";
import { colors } from "react-native-elements";
import { Spacer } from "../../../../Components/Spacer";
import CustomModal from "../../../../Components/CustomModal";
import { verticalScale } from "react-native-size-matters";
import CustomTextInput from "../../../../Components/CustomTextInput";
import CustomButton from "../../../../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const MyCollectionGallery = () => {
  const navigation = useNavigation();
  const num = [
    { id: 1, heart: "4", seen: "26", img: gallery.gallery1 },
    { id: 2, heart: "3", seen: "26", img: gallery.gallery2 },
    { id: 3, heart: "4", seen: "26", img: gallery.gallery3 },
    { id: 4, heart: "5", seen: "26", img: gallery.gallery4 },
    { id: 5, heart: "2", seen: "26", img: gallery.gallery5 },
    { id: 6, heart: "6", seen: "26", img: gallery.gallery6 },
    { id: 7, heart: "7", seen: "26", img: gallery.gallery7 },
    { id: 8, heart: "8", seen: "26", img: gallery.gallery8 },
    { id: 9, heart: "9", seen: "26", img: gallery.gallery9 },
    { id: 10, heart: "10", seen: "26", img: gallery.gallery10 },
    { id: 8, heart: "11", seen: "26", img: gallery.gallery11 },
    { id: 8, heart: "12", seen: "26", img: gallery.gallery12 },
    { id: 8, heart: "13", seen: "26", img: gallery.gallery13 },
    { id: 8, heart: "14", seen: "26", img: gallery.gallery1 },
    { id: 8, heart: "15", seen: "26", img: gallery.gallery2 },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Spacer height={Platform.OS == "ios" ? 8 : null} />
      <ImageContainer>
        {num.map((item, index) => (
          //   <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("SelectScreen");
            }}
            style={{
              width: Dimensions.get("window").width / 3.4,
              height: Platform.OS == "ios" ? 125 : 100,
              marginBottom: verticalScale(9),
            }}
          >
            <Image
              source={item.img}
              style={{ width: "100%", height: "100%", borderRadius: 12 }}
            />

            <View
              style={{
                position: "absolute",
                zIndex: 1,
                // bottom: 90,
                top: 7,
                right: 10,
              }}
            >
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={icons.cross} style={{ width: 14, height: 14 }} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                position: "absolute",
                zIndex: 1,

                bottom: 10,
                left: 9,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={icons.eye}
                  style={{ width: 13, height: 9, marginTop: 2 }}
                />
                <CustomText
                  label={item.seen}
                  marginLeft={4}
                  alignSelf={"center"}
                  fontSize={7}
                  color={colors.white}
                  fontFamily={"semiBold"}
                />
              </View>
              <View
                style={{ flexDirection: "row", marginTop: verticalScale(3) }}
              >
                <Image
                  source={icons.heart}
                  style={{
                    width: 12,
                    height: 10,
                    marginTop: 2,
                    tintColor: colors.white,
                  }}
                />

                <CustomText
                  label={item.heart}
                  marginLeft={4}
                  alignSelf={"center"}
                  fontSize={7}
                  color={colors.white}
                  fontFamily={"semiBold"}
                />
              </View>
            </View>
          </TouchableOpacity>
          //   {/* </View> */}
        ))}
      </ImageContainer>
      {/* <Spacer height={Platform.OS == "ios" ? 10 : null} /> */}
      {/* <Spacer height={10}  /> */}
      {/* navigation.navigate("UploadImages") */}
      {/* <TouchableOpacity 
      style={{marginTop: Platform.OS=="ios"? 5:0}}
      onPress={() =>
         navigation.navigate("UploadImages")}>
        <View style={{ display: "flex", alignSelf: "center" }}>
          <Image source={icons.upload} style={{ height: 80, width: 80 }} />
        </View>
      </TouchableOpacity> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        activeOpacity={0}
        // backgroundColor={colors.white}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            width: "100%",
            padding: 30,
            height: "37%",
            bottom: 0,
            backgroundColor: colors.white,
            position: "absolute",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          <Spacer height={verticalScale(20)} />
          <View style={{ width: "100%", paddingHorizontal: 15 }}>
            <CustomText
              label="Are you sure you want to delete this image?"
              fontFamily={"bold"}
              fontSize={"20"}
              alignSelf="center"
              align="center"
              textAlign="center"
            />
          </View>
          <Spacer height={verticalScale(6)} />

          <CustomText
            label="You cannot undo this action"
            fontFamily={"regular"}
            fontSize={"12"}
            alignSelf="center"
            align="center"
            textAlign="center"
          />
          <Spacer height={verticalScale(20)} />

          <CustomButton
            title="Yes, Delete Image"
            fontSize={16}
            borderRadius={17}
            height={55}
            backgroundColor={colors.black}
          />

          <CustomText
            onPress={() => setModalVisible(!modalVisible)}
            label="No, Go Back"
            fontFamily={"bold"}
            fontSize={"12"}
            marginTop={verticalScale(5)}
            alignSelf="center"
            align="center"
            textAlign="center"
          />
        </View>
      </Modal>
    </View>
  );
};

const ImageContainer = styled(View, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
});

export default MyCollectionGallery;

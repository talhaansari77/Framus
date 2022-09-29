import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import gallery from "../../../../../Assets/Gallery";
import styled from "react-native-styled-components";
import icons from "../../../../../Assets/Icons";
import CustomText from "../../../../Components/CustomText";
import { colors } from "react-native-elements";
import { Spacer } from "../../../../Components/Spacer";

const MyCollectionGallery = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <View>
      <Spacer height={Platform.OS == "ios" ? 8 : null} />
      <ImageContainer>
        {num.map((item, index) => (
          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: Dimensions.get("window").width / 3.9,
                height: 110,
                marginBottom: 10,
              }}
            >
              <Image
                source={gallery.gallery03}
                style={{ width: "100%", height: "100%", borderRadius: 12 }}
              />
              {/* <Image source={icons.eye} style={{position:"absolute", zIndex:1}} /> */}
              <View
                style={{
                  position: "absolute",
                  zIndex: 1,
                  flexDirection: "row",
                  bottom: 27,
                  left: 9,
                }}
              >
                <Image source={icons.eye} style={{ width: 13, height: 9 }} />
                <CustomText
                  label="3,124,244"
                  marginLeft={4}
                  alignSelf={"center"}
                  fontSize={7}
                  color={colors.white}
                  fontFamily={"semiBold"}
                />
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 1,
                  flexDirection: "row",
                  bottom: 10,
                  left: 9,
                }}
              >
                <Image source={icons.heart} style={{ width: 13, height: 11 }} />
                <CustomText
                  label="2,412,444"
                  marginLeft={4}
                  alignSelf={"center"}
                  fontSize={7}
                  color={colors.white}
                  fontFamily={"semiBold"}
                />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ImageContainer>
      <Spacer height={Platform.OS == "ios" ? 10 : null} />
      {/* <Spacer height={10}  /> */}
      <View style={{ display: "flex", alignSelf: "center" }}>
        <Image source={icons.upload} style={{ height: 80, width: 80 }} />
      </View>
    </View>
  );
};

// const Container = styled(View, {
//   display: "flex",
//   width: "100%",
//   flex: 1,
//   backgroundColor: "#f3f3f3",
//   // backgroundColor: "red",
// });

const ImageContainer = styled(View, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
});

export default MyCollectionGallery;

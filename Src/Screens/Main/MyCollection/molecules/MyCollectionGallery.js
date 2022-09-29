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
  const navigation=useNavigation();
  const num = [gallery.gallery02,gallery.gallery03,gallery.gallery01,gallery.gallery03,gallery.gallery02,gallery.gallery03,gallery.gallery02,gallery.gallery03,gallery.gallery01];

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View>
      <Spacer height={Platform.OS == "ios" ? 8 : null} />
      <ImageContainer>
        {num.map((item, index) => (
          //   <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={()=>{
              navigation.navigate("SelectScreen")

            }}
            style={{
              width: Dimensions.get("window").width / 3.9,
              height: Platform.OS=="ios"?110:100,
              marginBottom: 10,
            }}
          >
            <Image
              source={item}
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
              <View style={{  flexDirection: "row"}}>
                <Image source={icons.eye} style={{ width: 13, height: 9, marginTop:2 }} />
                <CustomText
                  label="3,124,244"
                  marginLeft={4}
                  alignSelf={"center"}
                  fontSize={7}
                  color={colors.white}
                  fontFamily={"semiBold"}
                />
              </View>
              <View style={{  flexDirection: "row"}}>
                <Image source={icons.heart} style={{ width: 12, height: 10, marginTop:2 }} />

                <CustomText
                  label="2,412,444"
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
      <Spacer height={Platform.OS == "ios" ? 10 : null} />
      {/* <Spacer height={10}  /> */}
      {/* navigation.navigate("UploadImages") */}
      <TouchableOpacity onPress={() => navigation.navigate("UploadImages")}>
      <View onPress={()=>console.log('kajsld')} style={{ display: "flex", alignSelf: "center" }}>
        <Image source={icons.upload} style={{ height: 80, width: 80 }} />
      </View>
      </TouchableOpacity>  

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

          {/* <View
            style={{
              shadowOffset: { width: 5, height: 3 },
              shadowColor: "#100C3E",
              shadowOpacity: 0.5,
              shadowRadius: 5,
              width: "100%",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              // elevation: 1
            }}
          > */}
            <CustomButton
              //   onPress={() =>
              //     onSavePersonality()
              //     }

              title="Yes, Delete Image"
              fontSize={16}
              borderRadius={17}
              height={55}
              backgroundColor={colors.black}

              // paddingHorizontal={50}
            />
          {/* </View> */}
          {/* <Spacer height={verticalScale(6)} /> */}
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

          {/* <CustomButton
            onPress={() => setModalVisible(!modalVisible)}
            title="No, Go Back"
            color={colors.black}
            backgroundColor={colors.white}
            borderColor={colors.black}
            fontSize={15}
            borderWidth={0}
          /> */}
          {/* </View>
            </View> */}
        </View>
      </Modal>
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

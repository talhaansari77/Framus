import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import commonStyles from "../../../Utils/CommonStyles";
import gallery from "../../../../Assets/Gallery";

import { moderateScale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../Utils/Colors";
import icons from "../../../../Assets/Icons";
import CustomText from "../../../Components/CustomText";
import MenueModal from "./molecules/MenueModal";
import { Entypo } from "@expo/vector-icons";
import Lottie from 'lottie-react-native';


const PlayMusic = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [add, setAdd] = useState(false)

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1 }}>
        <Image
          source={gallery.gallery1}
          style={commonStyles.img}
          blurRadius={10}
        />
      </View>
      <View style={styles.backImage}>
        <Image
          resizeMode="cover"
          source={gallery.playMusic1}
          style={{ height: "65%", width: "100%" }}
          blurRadius={0}
        />
      </View>

      <View
        style={{
          height: "100%",
          position: "absolute",
          top: 0,
          width: "100%",
          backgroundColor: colors.black,
          opacity: 0.6,
          zIndex: 1,
        }}
      ></View>

      <View style={styles.absoluteHeader}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              resizeMode="contain"
              source={icons.dot}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={{ marginLeft: 15, width: 25, height: 25 }}
          >
            <Image
              resizeMode="contain"
              source={icons.cinema}
              style={commonStyles.img}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          style={{ marginLeft: 15, width: 18, height: 18 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            resizeMode="contain"
            source={icons.playCross}
            style={commonStyles.img}
          />
        </TouchableOpacity>
        <View style={styles.CenterContainer}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 99,
                overflow: "hidden",
              }}
            >
              <Image
                resizeMode="contain"
                source={icons.collectiontree}
                style={commonStyles.img}
              />
            </View>
            <TouchableOpacity activeOpacity={0.6} style={styles.plusBtn}
            onPress={()=>{
              setAdd(!add)

            }}
            >
              {
                add?(
                  <View>
                     <Lottie
                  style={{ height: 30, width: 30 }}
                  source={require("../../../../Assets/Loader/checkLoader.json")}
                  autoPlay={add}
                  
                  // loop={add}
                  speed={1.5}
                />

                  </View>
                ):
                <View>
                                <Entypo name="plus" size={moderateScale(20)} color="black" />


                </View>
              }
           
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", paddingHorizontal: 40 }}>
            <CustomText
              label="username_Loremipsum123"
              numberOfLines={1}
              //   marginLeft={verticalScale(10)}
              marginTop={verticalScale(15)}
              color={colors.white}
              fontFamily={"bold"}
              fontSize={verticalScale(8)}
            />

            <View>
              <CustomText
                label="portrait of a person morphed with bands of textured colored fabric in a beautiful painterly style"
                numberOfLines={3}
                textAlign={"center"}
                marginTop={verticalScale(5)}
                color={colors.white}
                fontSize={verticalScale(7)}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              //   height: verticalScale(50),
              marginTop: verticalScale(50),
            }}
          >
            <TouchableOpacity activeOpacity={0.5}>
              <View style={{ display: "flex", alignSelf: "center" }}>
                <Image
                  source={icons.on}
                  style={{ height: 18, width: 15, tintColor: colors.white }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                alignSelf: "center",
                marginHorizontal: verticalScale(30),
              }}
              onPress={() => {
                // setAddCollection(!addCollection);
              }}
            >
              <Image
                resizeMode="contain"
                source={icons.unGroup}
                style={{ height: 40, width: 40, tintColor: colors.white }}
              />
              {/* <AntDesign name="hearto" size={27} /> */}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={{ display: "flex", alignSelf: "center" }}>
                <Image
                  resizeMode="contain"
                  source={icons.next}
                  style={{ height: 20, width: 20, tintColor: colors.white }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <MenueModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default PlayMusic;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // marginTop: Platform.OS == "ios" ? verticalScale(35) : 0,
  },
  backImage: {
    height: "100%",
    position: "absolute",
    top: 0,
    width: "100%",
    borderRadius: 0,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  absoluteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    zIndex: 1,
    width: "100%",
    padding: 20,
    marginTop: Platform.OS == "ios" ? verticalScale(35) : 0,
  },
  plusBtn: {
    width: 27,
    height: 27,
    borderRadius: 99,
    backgroundColor: colors.white,
    position: "absolute",
    bottom: 0,
    top: 42,
    alignItems: "center",
    justifyContent: "center",
  },
  CenterContainer: {
    position: "absolute",
    top: 0,
    marginTop: "70%",
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    marginLeft: 20,
  },
});

import { StyleSheet, Text, View,TouchableOpacity,Image,Platform } from 'react-native'
import React from 'react'
import CustomText from '../../../../Components/CustomText'
import icons from '../../../../../Assets/Icons'
import profile from '../../../../../Assets/Profile'
import { verticalScale,moderateScale } from 'react-native-size-matters'
import { colors } from '../../../../Utils/Colors'
import commonStyles from '../../../../Utils/CommonStyles'


const CarouselContainer = ({item,onPress}) => {
  return (

    <View
    style={styles.mainContainer}
  >
    <Image
      source={item}
      style={{ width: "130%", height: "100%" }}
      resizeMode={"cover"}
      blurRadius={6}
    />
    <View
      style={{
        position: "absolute",
        width: "65%",
        // zIndex: 2,
        height: "100%",
      }}
    >
      <Image
        style={{ height: "100%", width: "100%" }}
        source={item}
        blurRadius={0}
      />
    </View>

    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: colors.black,
        opacity: 0.7,
        zIndex: 1,
      }}
    ></View>

    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
      style={styles.absoluteContainer}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              resizeMode="contain"
              source={icons.dot}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
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
          style={{ marginLeft: 15, width: 22, height: 22 }}
        >
          <Image
            resizeMode="contain"
            source={icons.zoom}
            style={commonStyles.img}
          />
        </TouchableOpacity>
      </View>

      <View style={{ height: "25%", width: "100%" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              resizeMode="contain"
              source={icons.collectiontree}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>

          <CustomText
            label="username_Loremipsum123"
            numberOfLines={1}
            marginLeft={verticalScale(10)}
            marginTop={verticalScale(5)}
            color={colors.white}
            fontFamily={"bold"}
            fontSize={verticalScale(8)}
          />
        </View>

        <CustomText
          label="portrait of a person morphed with bands of textured colored fabric in a beautiful painterly style"
          color={colors.white}
          numberOfLines={2}
          fontSize={verticalScale(7)}
        />
      </View>
    </TouchableOpacity>
  </View>
   
  )
}

export default CarouselContainer

const styles = StyleSheet.create({
    mainContainer:{
        height: verticalScale(230),
        // justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: moderateScale(12),
        // width:100,
        width: Platform.OS == "ios" ? "100%" : moderateScale(330),
        // marginHorizontal: 5,
        borderRadius: 12,
    },
    absoluteContainer:{
        zIndex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: 20,
        justifyContent: "space-between",
    }

})
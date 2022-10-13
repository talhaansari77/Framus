import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { verticalScale,moderateScale } from 'react-native-size-matters'
import CustomText from '../../../../Components/CustomText'
import icons from '../../../../../Assets/Icons'
import { colors } from '../../../../Utils/Colors'
import gallery from '../../../../../Assets/Gallery'
import React from 'react'

const PlayMusicContainer = () => {
  return (
    <View
    style={styles.mainContainer}
  >
    <View style={styles.secondContainer}>
      <View
        style={styles.imgContainer}
      >
        <View
          style={{
            position: "absolute",
            width: "65%",
            zIndex: 1,
            height: "100%",
          }}
        >
          <Image
            style={{ height: "100%", width: "100%" }}
            source={gallery.galleryMainImage01}
            blurRadius={0}
          />
        </View>
        <Image
          source={gallery.galleryMainImage01}
          style={{ width: "130%", height: "100%" }}
          resizeMode={"cover"}
          blurRadius={6}
        />
      </View>

      <View style={{ marginLeft: 10, width: "72%", marginBottom: 20 }}>
        <CustomText
          numberOfLines={1}
          label="username_Loremipsum123"
          // marginLeft={verticalScale(10)}
          fontFamily={"bold"}
          color={colors.black}
          fontSize={verticalScale(6)}
        />
        <CustomText
          numberOfLines={2}
          label="portrait of a person morphed with bands of texture"
          // marginLeft={verticalScale(10)}
          color={colors.black}
          fontSize={verticalScale(6)}
        />
      </View>
    </View>

    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",

        // height: verticalScale(50),
      }}
    >
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ display: "flex", alignSelf: "center" }}>
          <Image source={icons.on} style={{ height: 15, width: 13 }} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          alignSelf: "center",
          marginHorizontal: verticalScale(12),
        }}
      >
        <Image
          resizeMode="contain"
          source={icons.unGroup}
          style={{ height: 30, width: 20 }}
        />
        {/* <AntDesign name="hearto" size={27} /> */}
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
        <View style={{ display: "flex", alignSelf: "center" }}>
          <Image
            resizeMode="contain"
            source={icons.next}
            style={{ height: 18, width: 18 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  </View>
  
  )
}

export default PlayMusicContainer

const styles = StyleSheet.create({
    mainContainer:{
        width: "97%",
        position: "absolute",
        height: verticalScale(55),
        backgroundColor: colors.white,
        bottom: 0,
        marginBottom: verticalScale(76),
        marginLeft: 5,
        borderRadius: moderateScale(15),
        padding: 9,
        flexDirection: "row",
    },  
    imgContainer:{
          width: 60,
          height: "100%",
          borderRadius: 10,
          overflow: "hidden",
          alignItems: "center",
        },
        secondContainer:{
            width: "75%", height: "100%", flexDirection: "row" 
        }

})
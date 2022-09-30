import { StyleSheet, Text, View,TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import CustomText from '../../../../Components/CustomText';
import { colors } from '../../../../Utils/Colors';
import { verticalScale,moderateScale } from 'react-native-size-matters';

const TodayShow = ({onPress}) => {
  return (
    <View style={styles.header}>


    <CustomText
      fontSize={"15"}
      fontWeight={"600"}
      color={colors.white}
      fontFamily="inter"
    >
      Today Shows
    </CustomText>
    <TouchableOpacity
    activeOpacity={0.6}
    >
    <Feather name={"search"} color={colors.gray} size={22} />


    </TouchableOpacity>
  </View>
  )
}

export default TodayShow

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: verticalScale(20),
        marginRight: verticalScale(20),
        marginTop: Platform.OS=="ios"? verticalScale(10):null
      },

})
import { Platform, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'react-native-styled-components'
import CustomText from '../../../../Components/CustomText'
import Feather from 'react-native-vector-icons/Feather'
import { Spacer } from '../../../../Components/Spacer'
import { verticalScale } from 'react-native-size-matters'
import { NavigationContainer } from '@react-navigation/native'

const TopNav = ({onPress}) => {
  return (

    <>
      <Spacer height={Platform.OS == "ios" ? 40 : 30} />
      <Row>
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={onPress}
        >
          <Feather name='chevron-left' size={verticalScale(25)} />
        </TouchableOpacity>
        <View >
          <CustomText label={"Upload"} fontSize={18} fontFamily={"bold"} />
        </View>
        <View />
      </Row>
    </>
  )
}

export default TopNav

const Row = styled(View, {

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 10,

  // marginTop:Platform.OS="ios"?verticalScale(40):verticalScale(30)r


});

const styles = StyleSheet.create({})
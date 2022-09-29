import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'react-native-styled-components'
import CustomText from '../../../../Components/CustomText'
import Feather from 'react-native-vector-icons/Feather'
import { Spacer } from '../../../../Components/Spacer'
import { verticalScale } from 'react-native-size-matters'

const TopNav = () => {
  return (
  
    <Row>
    {/* <Spacer width={5} /> */}
    <View >
        <Feather name='chevron-left' size={verticalScale(25)} />
    </View>
    <View >
        <CustomText label={"Upload"} fontSize={18} fontFamily={"bold"} />
    </View>
    <View/>
</Row>
  )
}

export default TopNav

const Row = styled(View, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal:10,
    marginTop:Platform.OS="ios"?verticalScale(40):verticalScale(30)

});

const styles = StyleSheet.create({})
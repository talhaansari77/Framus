import { View, Text, Image } from 'react-native'
import React from 'react'
import Channels from '../../../../../Assets/Channels'
import styled from 'react-native-styled-components'
import { verticalScale } from 'react-native-size-matters'
import { colors } from '../../../../Utils/Colors'
import commonStyles from '../../../../Utils/CommonStyles'

const Banner = () => {
  return (
    <BannerContainer>
      <Image source={Channels.Banner} style={commonStyles.img}  resizeMode={"cover"}/>
    </BannerContainer>
  )
}

export default Banner

const BannerContainer=styled(View,{
    height:129,
    
    backgroundColor:"red",
    marginTop:3
})
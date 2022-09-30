import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { colors } from '../../../../Utils/Colors';
import CustomTextInput from '../../../../Components/CustomTextInput';

const GradientForm = (props) => {
  return (
    <>
      <LinearGradient
            activeOpacity={0.6}
            style={{height:53,width:props.mainWidth,borderRadius:10}}
            colors={[colors.primary, "#28100DFC"]}
            padding={0.2}
          
            // paddingLeft={0.1}
            // paddingRight={0.1}
            borderRadius={10}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
              <CustomTextInput
                SelfAlign={"center"}
                backgroundColor={colors.lightBlack}
                // borderWidth={1}
                borderColor={colors.black}
                // width={"90%"}
                inputWidth={props.inputWidth}
                line={props.line}
                // inputWidth={"50%"}
                height={52}
                borderRadius={10}
                placeholder={props.placeholder}
                placeholderTextColor={colors.gray}
                color={colors.white}
                keyboardType={props.keyboardType}
                search={props.search}
                mic={props.mic}
                playCircle={props.playCircle}
                downArrow={props.downArrow}
                tv={props.tv}
                calendar={props.calendar}
                calendarClock={props.calendarClock}
              />
          </LinearGradient>
    </>
  )
}

export default GradientForm
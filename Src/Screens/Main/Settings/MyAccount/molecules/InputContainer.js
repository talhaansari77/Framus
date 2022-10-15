import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { verticalScale } from 'react-native-size-matters'
import { colors } from '../../../../../Utils/Colors'
import CustomText from '../../../../../Components/CustomText'


const InputContainer = ({...props}) => {
  return (
    <View style={styles.mainContainer}>
        <CustomText label={props.label}
        color={colors.lightGray}
        marginBottom={-2}
        />

<TextInput
          style={[
            {
              width:   "95%",
              paddingRight:  10,
              fontFamily: "light",
              color:  colors.black,
              fontSize: verticalScale(12),
            },
          ]}
          onChangeText={props.onChangeText}
          value={props.value}
          numberOfLines={props.numberOfLines}
          keyboardType={props.keyboardType}
          autoCapitalize="none"
          multiline={props.multiline}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
        />
        

    </View>
  )
}

export default InputContainer

const styles = StyleSheet.create({
    mainContainer:{
        height:verticalScale(45),
        width:"100%",
        backgroundColor:colors.white,
        borderRadius:8,
        padding:15,
        marginBottom:verticalScale(10)




    }

})
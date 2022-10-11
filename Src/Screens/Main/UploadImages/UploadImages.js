import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNav from './Molecules/TopNav'
import ImageContainer from './Molecules/ImageContainer'
import CustomTextInput from '../../../Components/CustomTextInput'
import { colors } from '../../../Utils/Colors'
import TermAndCondition from './Molecules/TermAndCondition'
import CustomButton from '../../../Components/CustomButton'
import { verticalScale } from 'react-native-size-matters'

const UploadImages = ({navigation}) => {
  return (
    <View style={{flex:1,}}>
        <TopNav
        onPress={()=>{
          navigation.navigate("MyCollection")


        }}
        />
        <ImageContainer/>
        <TermAndCondition/>
        <View style={{alignItems:"center",marginHorizontal:15,marginTop:20}}>
        <CustomButton
          height={verticalScale(45)}
        
        title="Upload"
        borderRadius={15}
        fontFamily={"bold"}
        color={colors.white}
        backgroundColor={colors.black}
        onPress={() => {
        //   onHandleSubmit();
          navigation.navigate("MainStack",{screen:"MyCollection"})
        }}

      />

        </View>

       

    
        
        

    </View>
  )
}

export default UploadImages

const styles = StyleSheet.create({})
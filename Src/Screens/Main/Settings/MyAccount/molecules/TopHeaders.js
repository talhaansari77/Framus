import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../../../../../Components/CustomText'
import Feather from "react-native-vector-icons/Feather";
import { verticalScale } from 'react-native-size-matters';


const TopHeaders = ({onPress}) => {
  return (
    <View style={styles.mainContainer}>
         <TouchableOpacity
        activeOpacity={0.6}
        // style={{ paddingLeft: 15, flex:1 }}
        onPress={onPress}
      >
        <Feather name="chevron-left" size={verticalScale(22)} />
      </TouchableOpacity>


<CustomText
          label="My Account"
          fontFamily={"bold"}
          fontSize={18}
          marginLeft={-20}

          
        />
        <View/>

    </View>
  )
}

export default TopHeaders

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:verticalScale(20)


    }

})
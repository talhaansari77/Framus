import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet,verticalScale } from 'react-native-size-matters'
import { colors } from '../../../../Utils/Colors'
import CustomText from '../../../../Components/CustomText'

const SelectChannel = ({name,item,count,setCount,textLength}) => {
  return (
    <View style={styles.selectConatiner}>
    <TouchableOpacity
      onPress={() => {
        setCount(item.id);
        // console.log(item.id);
        // let data = signalFilter(signalList, item.id)
        // setSignalTabsData(data);
      }}
      activeOpacity={0.6}
    >
      <CustomText
        label={name}
        color={item.id == count ? colors.white : colors.gray}
        fontFamily="bold"
        fontSize={verticalScale(10)}
      />
      {/* textLength */}
    </TouchableOpacity>
    {item.id == count ? <View style={[styles.lineConatiner,{
              width:textLength *9,


    }]}></View> : null}
  </View>
  
  )
}

export default SelectChannel

const styles = ScaledSheet.create({

    selectConatiner: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal:20
        // padding: "5@s",
        // width: "50%",
      },
      lineConatiner: {
        height: verticalScale(2),
        backgroundColor: colors.white,
        borderTopLeftRadius:5,
        borderTopRightRadius:5    
      },

})
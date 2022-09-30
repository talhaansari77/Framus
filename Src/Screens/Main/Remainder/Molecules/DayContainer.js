import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import { colors } from "../../../../Utils/Colors";
import { ScaledSheet } from "react-native-size-matters";
import CustomText from "../../../../Components/CustomText";
import { LinearGradient } from "expo-linear-gradient";

const DayContainer = ({txt2,txt1,item,count, setCount}) => {
  return (
      <TouchableOpacity
      activeOpacity={0.6}
      onPress={()=>{
          setCount(item.id)

      }}
      >

    <LinearGradient 
    activeOpacity={0.6}
    colors={[count == item.id?'#B13025':colors.lightBlack,   count == item.id?'#28100DFC':colors.lightBlack,]} 

    
    style={[styles.mainContainer, {
        // backgroundColor:"",
        borderWidth:1,
        borderColor:colors.primary

    }]}>
          <CustomText
        fontSize={"14"}
        fontWeight={"500"}
        color={ count == item.id ?colors.white:colors.gray}
        fontFamily="inter"
        label={txt1}
      >

      </CustomText>
      <CustomText
        fontSize={"14"}
        fontWeight={"500"}
        color={  count == item.id ?colors.white:colors.gray}
        fontFamily="inter"
        label={txt2}
      >
          
      </CustomText>

    </LinearGradient>
    </TouchableOpacity>

  );
};

export default DayContainer;

const styles = ScaledSheet.create({
  mainContainer: {
    width: "60@s",
    height: "80@vs",
    alignItems: "center",
    justifyContent:"center",
    borderRadius:15,
    marginHorizontal:10
  },
});

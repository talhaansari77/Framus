import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../../../Utils/Colors";
import { ScaledSheet } from "react-native-size-matters";
import CustomText from "../../../../Components/CustomText";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";

const DaysList = ({ icon, txt2, txt1, item, count, setCount }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        setCount(item.id);
      }}>
        <LinearGradient
         activeOpacity={0.6}
            style={[
              styles.mainContainer,

              {
                padding:1.5,
               
              },
            ]}
            colors={[ count==item.id ?"#B13025" :colors.lightBlack, count==item.id? "#28100D":colors.lightBlack]}
            // padding={0.6}
            // paddingLeft={1}
            // paddingRight={1}
            borderRadius={10}
            start={{ x: 0, y:  count==item.id?0.5:0 }}
            end={{ x: count==item.id? 1:0, y:  count==item.id?0.5:0 }}
        >
          <View
             // colors={[count == colors.lightBlack, count == colors.lightBlack]}
             style={{width:"100%",height:"100%",backgroundColor:colors.lightBlack,borderRadius:10,alignItems:"center",justifyContent:"center"}}>

<CustomText
          fontSize={"14"}
          fontWeight={"500"}
          color={count == item.id ? colors.primary : colors.gray}
          fontFamily="inter"
          label={txt1}
        ></CustomText>
        {icon ? (
          <AntDesign
            name={"checkcircle"}
            color={count == item.id ? colors.primary : colors.gray}
            size={20}
          />
        ) : (
          <CustomText
            fontSize={"14"}
            fontWeight={"500"}
            //   color={count == item.id ? colors.primary : colors.gray}
            fontFamily="inter"
            label={txt2}
          ></CustomText>
        )}


          </View>

        </LinearGradient>

        

{/* <LinearGradient
            activeOpacity={0.6}
            style={[
              styles.mainContainer,
              {
                // backgroundColor:"",
                borderWidth: 1,
                borderColor: colors.primary,
              },
            ]}
            colors={[ count==item.id ?colors.primary :colors.lightBlack, count==item.id? colors.lightBlack:colors.lightBlack]}
            // padding={0.6}
  
            paddingLeft={1}
            paddingRight={1}
            borderRadius={10}
            start={{ x: 0, y:  count==item.id?0.5:0 }}
            end={{ x: count==item.id? 1:0, y:  count==item.id?0.5:0 }}
          >

      <View
        activeOpacity={0.6}
        // colors={[count == colors.lightBlack, count == colors.lightBlack]}
        style={[
          styles.mainContainer,
          {
            // backgroundColor:"",
            borderWidth: 1,
            borderColor: colors.primary,
          },
        ]}
      >
        <CustomText
          fontSize={"14"}
          fontWeight={"500"}
          color={count == item.id ? colors.primary : colors.gray}
          fontFamily="inter"
          label={txt1}
        ></CustomText>
        {icon ? (
          <Ionicons
            name={"checkmark-circle-outline"}
            color={count == item.id ? colors.primary : colors.gray}
            size={27}
          />
        ) : (
          <CustomText
            fontSize={"14"}
            fontWeight={"500"}
            //   color={count == item.id ? colors.primary : colors.gray}
            fontFamily="inter"
            label={txt2}
          ></CustomText>
        )}
        </View>
          </LinearGradient> */}
    </TouchableOpacity>
  );
};

export default DaysList;

const styles = ScaledSheet.create({
  mainContainer: {
    width: "60@s",
    height: "55@vs",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    // marginHorizontal: 5,
    marginRight:10,
    marginTop: 2,
  },
});

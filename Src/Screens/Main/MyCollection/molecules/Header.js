import { StyleSheet, Text, View, TouchableOpacity, Image,Platform } from "react-native";
import React from "react";
import { colors } from "../../../../Utils/Colors";
import CustomText from "../../../../Components/CustomText";
import icons from "../../../../../Assets/Icons";
import { verticalScale } from "react-native-size-matters";

const Header = () => {
  return (
    
      <View style={styles.header}>
           <TouchableOpacity
          activeOpacity={0.6}
          style={{ alignSelf: "center",}}
        >
            <Image
              source={icons.settingIcon}
              style={{ height: 20, width: 35, }}
              resizeMode={"contain"}
              alignSelf={"center"}
              marginBottom={8}
            />
        </TouchableOpacity>
        
          <CustomText
            label="On Display"
            fontFamily={"bold"}
            fontSize={19}
            marginTop={-10}
            color={colors.black}
          />
       

        <TouchableOpacity activeOpacity={0.6}>
          <Image
            source={icons.bellIcon}
            style={{ height: 23, }}
            resizeMode={"contain"}
          />
          {/* <View style={styles.IconNumber}>
        <CustomText
          label="12"
          fontSize={8}
          alignSelf={"center"}
          fontFamily={"regular"}
          color={colors.white}
        />
      </View> */}
        </TouchableOpacity>
      </View>

  );
};

export default Header;

const styles = StyleSheet.create({

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // height:verticalScale(70),
    alignItems:"center",
    backgroundColor:colors.white,
    // padding:20
    paddingLeft:15,
    paddingRight:15,
    paddingVertical:verticalScale(10)
    // paddingHorizontal:10,
    // paddingTop: Platform.OS == "ios" ? verticalScale(15) : 10,
  },
  IconNumber:{
    width: 18,
    // height: 18,
    borderRadius: 50,
    backgroundColor: colors.red,
    top: -30,
    left: 12,
    alignItems: "center",
    paddingTop: 1,
  }
});

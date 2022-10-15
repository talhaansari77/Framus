import { View, Platform, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../../../../Utils/Colors";
import icons from "../../../../../Assets/Icons";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import commonStyles from "../../../../Utils/CommonStyles";
import Svg, { G, Path, Defs } from "react-native-svg"


const FooterBtn = ({ onPress }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.UploadBtn}>
      <Image
              source={icons.uploadContainer}
              style={{width:"100%",height:"100%",}}
            />
        <TouchableOpacity onPress={onPress}
        style={{position:"absolute"}}
        >
          <View
            style={{
              // alignSelf: "center",
              height: 70,
              width: 70,
              marginLeft:5,
              
              // marginTop:verticalScale(20)
            }}
          >
            
            <Image
            resizeMode="cover"
              source={icons.SelectImage}
              style={{width:"100%",height:"100%",}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterBtn;

const styles = ScaledSheet.create({
  mainContainer: {
    height: verticalScale(70),
    width: "100%",
    backgroundColor: colors.white1,

    shadowColor: Platform.OS == "ios" ? "black" : "black",
    shadowRadius: 8,
    elevation: 20,
    alignItems: "center",
    shadowOpacity: 1,

    shadowOffset: { width: 3, height: 5 },
  },
  UploadBtn: {
    position: "absolute",
    width: 80,
    height: 20,
    // borderRadius: 50,
    // backgroundColor: colors.red,
    marginTop: -15,
  },
});

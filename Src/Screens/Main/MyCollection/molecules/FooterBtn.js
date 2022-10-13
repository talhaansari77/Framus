import {
  View,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { colors } from "../../../../Utils/Colors";
import icons from "../../../../../Assets/Icons";
import { ScaledSheet, verticalScale } from "react-native-size-matters";

const FooterBtn = ({ onPress }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.UploadBtn}>
        <TouchableOpacity onPress={onPress}>
          <View style={{ display: "flex", alignSelf: "center" }}>
            <Image source={icons.upload} style={{ height: 65, width: 65 }} />
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
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: colors.white1,
    marginTop: -20,
  },
});

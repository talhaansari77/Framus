import { View, Text, Image } from "react-native";
import React from "react";
// import Channels from '../../../../../Assets/Channels'
import styled from "react-native-styled-components";
import Channels from "../../../../../Assets/Channels";
import movies from "../../../../../Assets/Movies";
import { verticalScale } from "react-native-size-matters";

const Banner = () => {
  return (
    <View style={{width:"100%",height:verticalScale(200)}}>
      <Image
        style={{ width: "100%",height:"100%"}}
        source={movies.darkMovie}
        resizeMode={"cover"}
      />
    </View>
  );
};

export default Banner;

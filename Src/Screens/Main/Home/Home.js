import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../../Utils/Colors";
import styled from "react-native-styled-components";

const Home = () => {
  return (
    <View style={{display: "flex", flex:1, justifyContent:"center", alignSelf:"center"}}>
      <Text style={{fontSize: 50}}>
      Home
      </Text>
    </View>
  );
};

export default Home;



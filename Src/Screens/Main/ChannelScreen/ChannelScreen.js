import TopNav from "./molecules/TopNav";

import React from "react";
import Header from "./molecules/Header";
import styled from "react-native-styled-components";
import { View } from "react-native";
import { colors } from "../../../Utils/Colors";
import Banner from "./molecules/Banner";

const ChannelScreen = () => {
  return (
    <Container>
      <Header />
      <TopNav />      
    </Container>
  );
};

export default ChannelScreen;

const Container = styled(View, {
  backgroundColor: colors.black,
  flex: 1,
});

import { View, Text } from "react-native";
import React from "react";
import TopBar from "./Molecules/TopBar";
import { colors } from "../../../Utils/Colors";
import SearchBars from "./Molecules/SearchBars";
import ChannelTv from "./Molecules/ChannelTv";
import styled from "react-native-styled-components";

const Home = () => {
  return (
    <Container>
      <TopBar />
      <SearchBars />
      <ChannelTv />
    </Container>
  );
};

export default Home;

const Container = styled(View, {
  backgroundColor: colors.black,
  flex: 1,
});

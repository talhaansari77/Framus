import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import SettingHeader from "./molecules/SettingHeader";
import styled from "react-native-styled-components";
import SettingBody from "./molecules/SettingBody";

const SettingScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <SettingHeader />
        <SettingBody />
      </Container>
    </SafeAreaView>
  );
};

const Container = styled(View, {
  width: "100%",
  paddingHorizontal: 20,
});

export default SettingScreen;

import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import NotificationHeader from "./molecules/NotificationHeader";
import styled from "react-native-styled-components";
import { Spacer } from "../../../Components/Spacer";
import { scale } from "react-native-size-matters";
import NotificationList from "./molecules/NotificationList";

const Notifications = () => {
  return (
    <Container>
      <NotificationHeader />
      <NotificationList />
    </Container>
  );
};
const Container = styled(View, {
  display: "flex",
  width: "100%",
  // flex: 1,
  // backgroundColor: "#f3f3f3",
  // backgroundColor: "red",
});

const PH25 = styled(View, {
  paddingHorizontal: scale(25),
});
export default Notifications;

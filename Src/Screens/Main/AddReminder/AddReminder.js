import { View, Text, SafeAreaView,ScrollView } from "react-native";
import React from "react";
import Banner from "./molecules/Banner";
import TopBar from "./molecules/TopBar";
import MainBody from "./molecules/MainBody";
import DaysContainer from "./molecules/DaysContainer";

const AddReminder = () => {
  return (
    <View>
      <TopBar />
      <ScrollView>

      <Banner />
      <MainBody />
      </ScrollView>

     
    </View>
  );
};

export default AddReminder;

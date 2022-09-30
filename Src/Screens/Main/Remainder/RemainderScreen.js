import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../Utils/Colors";
import CustomGradientButton from "../../../Components/CustomGradientButton";

import { moderateScale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../Components/CustomText";
import TopHeader from "./Molecules/TopHeader";
import Calender from "./Molecules/Calender";
import DayContainer from "./Molecules/DayContainer";
import TodayShow from "./Molecules/TodayShow";
import SelectChannel from "./Molecules/SelectChannel";
import movies from "../../../../Assets/Movies";
import MoviesContainer from "./Molecules/MoviesContainer";
import styled from "react-native-styled-components";
import { BlurView } from "expo-blur";
import commonStyles from "../../../Utils/CommonStyles";

const daysData = [
  { id: 1, txt1: "Mon", txt2: "22" },
  { id: 2, txt1: "Tue", txt2: "23" },
  { id: 3, txt1: "Wed", txt2: "24" },
  { id: 4, txt1: "Thu", txt2: "25" },
  { id: 5, txt1: "Fri", txt2: "26" },
  { id: 6, txt1: "Mon", txt2: "27" },
];

const selectData = [
  { id: 1, name: "Netflix" },
  { id: 2, name: "Amazon Prime" },
  { id: 3, name: "Disney Plus" },
  { id: 4, name: "BBC News" },
];

const MoviesData = [
  {
    id: 1,
    startTime: "10:00",
    endTime: "11am",
    moviesImg: movies.remainderMov1,
    title: "The Witcher",
    season: "Season 2,Ep- 10",
    des: "The witcher Geralt, a mutated monster hunter struggles to find his.",
  },
  {
    id: 2,
    startTime: "10:00",
    endTime: "11am",
    moviesImg: movies.remainderMov1,
    title: "Sherlock",
    season: "Season 2,Ep- 10",
    des: "The witcher Geralt, a mutated monster hunter struggles to find his.",
  },
  {
    id: 3,
    startTime: "10:00",
    endTime: "11am",
    moviesImg: movies.remainderMov1,
    title: "The Witcher",
    season: "Season 2,Ep- 10",
    des: "The witcher Geralt, a mutated monster hunter struggles to find his.",
  },
  {
    id: 4,
    startTime: "10:00",
    endTime: "11am",
    moviesImg: movies.remainderMov1,
    title: "The Witcher",
    season: "Season 2,Ep- 10",
    des: "The witcher Geralt, a mutated monster hunter struggles to find his.",
  },
  {
    id: 5,
    startTime: "10:00",
    endTime: "11am",
    moviesImg: movies.remainderMov1,
    title: "The Witcher",
    season: "Season 2,Ep- 10",
    des: "The witcher Geralt, a mutated monster hunter struggles to find his.",
  },
  {
    id: 6,
    startTime: "10:00",
    endTime: "11am",
    moviesImg: movies.remainderMov1,
    title: "The Witcher",
    season: "Season 2,Ep- 10",
    des: "The witcher Geralt, a mutated monster hunter struggles to find his.",
  },
  {
    id: 7,
    startTime: "10:00",
    endTime: "11am",
    moviesImg: movies.remainderMov1,
    title: "The Witcher",
    season: "Season 2,Ep- 10",
    des: "The witcher Geralt, a mutated monster hunter struggles to find his.",
  },
];

const RemainderScreen = ({ navigation }) => {
  const [count, setCount] = useState(-1);
  const [channelCount, setChannelCount] = useState(1);
  const [checkBox, setcheckBox] = useState(-1);

  const DaysRender = ({ item, index }) => {
    return (
      <DayContainer
        count={count}
        setCount={setCount}
        txt1={item.txt1}
        txt2={item.txt2}
        item={item}
      />
    );
  };
  const ChannelRender = ({ item, index }) => {

    console.log("textLength", item.name.length)
    return (
      <SelectChannel
        key={item.id}
        setCount={setChannelCount}
        item={item}
        textLength={item.name.length}

        count={channelCount}
        name={item.name}
   
      />
    );
  };

  const MoviesRender = ({ item, index }) => {
    console.log("itemImg", item);
    return (
      <MoviesContainer
        key={item.id}
        season={item.season}
        title={item.title}
        des={item.des}
        item={item}
        startTime={item.startTime}
        endTime={item.endTime}
        moviesImg={item.moviesImg}
        checkBox={checkBox}
        setcheckBox={setcheckBox}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View >
        <TopHeader
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Calender />
      </View>
      <View style={{ height: "13%" }}>
        <FlatList
          horizontal
          data={daysData}
          renderItem={DaysRender}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TodayShow />

      <View style={styles.selContainer}>
        <FlatList
          horizontal
          data={selectData}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={ChannelRender}
        />
        <Line elevation={2} />
      </View>

      <FlatList
        data={MoviesData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={MoviesRender}
      />
      <View
        style={{
          width: "100%",
          height: verticalScale(80),
          position: "absolute",
          backgroundColor:'rgba(52, 52, 52, 0.8)',
          bottom: 0,
          alignItems:"center",
          paddingTop:verticalScale(10),
        
          // opacity: 0.3,
        }}
      >

          <CustomGradientButton
          onPress={()=>{
            navigation.navigate("AddReminder")
            

          }}
            title={"Add New Show"}
            fontSize={20}
            width="90%"
            borderRadius={30}
            height={50}
            color1={"#B13025"}
            color2={"#79281E"}
          />
     

      </View>
    </View>
  );
};

export default RemainderScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop:Platform.OS=="ios"?10:null
  },
  showConatiner: {
    flexDirection: "row",
    width: "100%",
  },
  selContainer: {
    height: "3%",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
const Line = styled(View, (props) => ({
  height: 1,
  width: "100%",
  backgroundColor: colors.black,
  shadowColor: "#E1E8F1",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.9,
  shadowRadius: 3,

  elevation: props.elevation,
}));

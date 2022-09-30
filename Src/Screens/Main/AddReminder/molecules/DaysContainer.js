import { View, Text,Switch } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../../Components/CustomText";
import { colors } from "../../../../Utils/Colors";
import { Spacer } from "../../../../Components/Spacer";
import ToggleSwitch from "toggle-switch-react-native";
import styled from "react-native-styled-components";
import DaysList from "./DaysList";
import { FlatList } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

const DaysContainer = () => {
  const daysData = [
    {
      id: 1,
      txt1: "Mon",
      icon: true,
    },
    {
      id: 2,
      txt1: "Tue",
      icon: true,
    },
    {
      id: 3,
      txt1: "Wed",
      icon: true,
    },
    {
      id: 4,
      txt1: "Thu",
      icon: true,
    },
    {
      id: 5,
      txt1: "Fri",
      icon: true,
    },
    {
      id: 6,
      txt1: "Mon",
      icon: true,
    },
  ];

  const [isOn, setisOn] = useState(false);

  const [count, setCount] = useState(1);

  const toggleSwitch = () => setisOn((previousState) => !previousState);

  const DaysRender = ({ item, index }) => {
    return (
      <DaysList
        count={count}
        setCount={setCount}
        txt1={item.txt1}
        icon={item.icon}
        item={item}
      />
    );
  };
  return (
    <View>
      <Spacer height={10} />
      <MainPoriton>
        
        <View style={{ alignSelf: "center" }}>
          <CustomText
            label={"Notification"}
            fontFamily={"inter"}
            color={colors.white}
            fontWeight={"800"}
            fontSize={15}
          />
        </View>
        <View>
          {/* <Switch 
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3}] }}
          value={isOn}
          onValueChange={toggleSwitch}
          ios_backgroundColor={ isOn? colors.white:colors.primary}
          thumbColor={isOn?colors.primary:colors.white}

          trackColor={isOn?colors.primary:colors.white}
          /> */}

          <ToggleSwitch
            isOn={isOn.global}
            onColor={colors.switchGray}
            offColor={colors.primary}
            trackOnStyle={{color:colors.black}}
            thumbOffStyle={colors.primary}
            // thumbOffStyle={{color:colors.lightBlack}}
            // labelStyle={{ color: "black", fontWeight: "900" }}

            
            // labelStyle={{ color: colors.red, fontWeight: "900" }}
            size="large"
            onToggle={() => {
              setisOn({ ...isOn, global: !isOn.global });
            }}
          />
        </View>
      </MainPoriton>
      <Spacer height={10}/>

      <View style={{ height: "30%" }}>
        <FlatList
          horizontal
          data={daysData}
          renderItem={DaysRender}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const MainPoriton = styled(View, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export default DaysContainer;

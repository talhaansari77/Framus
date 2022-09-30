import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Spacer } from "../../../Components/Spacer";
import styled from "react-native-styled-components";
import ProfileNav from "../../../Components/ProfileNav";
import CustomText from "../../../Components/CustomText";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { colors } from "../../../Utils/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { scale, verticalScale } from "react-native-size-matters";


const settingList = [
  { id: 1, name: "View Channel Shows" },
  { id: 2, name: "Reminder" },
  { id: 3, name: "Add Reminder" },
  { id: 4, name: "Add New Channel" },
  { id: 5, name: "Download" },
  { id: 6, name: "Favorite Shows" },
  { id: 7, name: "General" },
  { id: 8, name: "Data saving" },
  { id: 9, name: "Video Quality Preferences" },
  { id: 10, name: "Watch on TV" },
  { id: 11, name: "App Settings" },
  { id: 12, name: "App Settings" },
  { id: 13, name: "Accounts" },
  { id: 14, name: "Help " },
  { id: 15, name: "Connected Apps" },
  { id: 16, name: "About" },
];

const GeneralSettings = ({navigation}) => {
  return (
    <Container>
      <Spacer height={40} />
      <ProfileNav
        LeftSide={() => (
          <Row>
            <PH10>
              <TouchableOpacity 
              activeOpacity={0.6}
              onPress={()=>{
                navigation.goBack()

              }}
              >
              <Ionicons
                name="chevron-back-outline"
                size={25}
                color={colors.white}
              />

              </TouchableOpacity>
            
            </PH10>
            <CustomText
              label={"Settings"}
              color={colors.white}
              fontSize={18}
              fontFamily={"inter"}
            />

            {/* <Divider color={colors.white} /> */}
          </Row>
        )}
      />
      {/* settings */}
      <Spacer height={10} />
      <Line elevation={2}  />

      {/* <Divider /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <PH45>
          {settingList.map((item) => (
            <TouchableOpacity activeOpacity={0.7}>
              <PV10>
                <CustomText
                  label={item.name}
                  color={colors.white}
                  fontSize={12}
                  fontFamily={"inter"}
                />
              </PV10>
            </TouchableOpacity>
          ))}
        </PH45>
      </ScrollView>
    </Container>
  );
};

export default GeneralSettings;

const Container = styled(View, {
  backgroundColor: colors.black,
  flex: 1,
});
const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
const PH45 = styled(View, {
  paddingHorizontal: scale(45),
});
const PV10 = styled(View, {
  paddingVertical: verticalScale(10),
});
const Row = styled(View, {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});
const Line = styled(View, (props)=>({
  height: 1,
  width: "100%",
  backgroundColor: colors.lightBlack,
  shadowColor: "#E1E8F1",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.5,
  shadowRadius: 1,

  elevation: props.elevation,
}));

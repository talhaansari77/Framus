import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import ProfileNav from "../../../Components/ProfileNav";
import CustomText from "../../../Components/CustomText";
import Ionicons from "react-native-vector-icons/Ionicons";
import styled from "react-native-styled-components";
import { colors } from "../../../Utils/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { Spacer } from "../../../Components/Spacer";

const settingList = [
  { id: 1, name: "App Settings" },
  { id: 2, name: "Account" },
  { id: 3, name: "Help" },
  { id: 4, name: "Location: USA" },
  { id: 5, name: "Language: English" },
  { id: 6, name: "Switch Account" },
  { id: 7, name: "Send Feedback" },
  { id: 8, name: "Sign Out" },
];

const Profile = ({navigation}) => {
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
              label={"Profile"}
              color={colors.white}
              fontSize={18}
              fontFamily={"inter"}
            />
          </Row>
        )}
      />
      {/* manage Accounts */}
      <Spacer height={10} />
      <Line elevation={5}  />
      <Spacer height={5} />
      <PV10>
        <PH10>
          <Row>
            <ProfileImage activeOpacity={0.6}>
              <Image
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
                source={{
                  uri: "https://i.pinimg.com/originals/99/bb/f1/99bbf1fc914ad9fcaea4c7a10fffabe9.png",
                }}
              />
            </ProfileImage>
            <Spacer width={18} />
            <View style={{paddingTop:verticalScale(10)}}> 
              <CustomText
                label={"Name"}
                color={colors.white}
                fontSize={18}
                fontFamily={"inter"}
              />
              <Spacer height={6} />
              <TouchableOpacity>
                <CustomText
                  label={"Manage Your Account"}
                  color={colors.link}
                  fontSize={12}
                  fontFamily={"inter"}
                />
              </TouchableOpacity>
            </View>
          </Row>
        </PH10>
      </PV10>
      {/* menu */}
      {/* <Spacer height={5} /> */}
      {/* <View style={{width:"100%",height:0.4,backgroundColor:colors.lightWhite}}></View> */}
      <Line elevation={1} />
      <Spacer height={10} />
      <PH45>
        {settingList.map((item,index) => (
          <TouchableOpacity activeOpacity={0.7} key={index}>
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
    </Container>
  );
};

export default Profile;

const Container = styled(View, {
  backgroundColor: colors.black,
  flex: 1,
});
const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
const PH45 = styled(View, {
  paddingHorizontal: scale(30),
});
const PV10 = styled(View, {
  paddingVertical: verticalScale(10),
});
const Row = styled(View, {
  flexDirection: "row",
  // paddingTop:verticalScale
  // alignItems: "center",
  // justifyContent: "center",
});
const ProfileImage = styled(TouchableOpacity, {
  height: 90,
  width: 90,
  borderRadius: 50,
  marginLeft:verticalScale(20),
  overflow: "hidden",
  // backgroundColor:colors.white
});

export const Line = styled(View, (props)=>({
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
import { View, Text, Platform,TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../../../../Components/CustomText";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../../../Utils/Colors";
import styled from "react-native-styled-components";
import { scale } from "react-native-size-matters";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { Spacer } from "../../../../Components/Spacer";

const Header = ({navigation}) => {
  return (
    <View>
 
        <Spacer height={Platform.OS=="ios"? 30:30}/>
      <Row>
        <Row>
          <PH10>
            <TouchableOpacity activeOpacity={0.6}
            // onPress={()=>{
            //   navigation.goBack()

            // }}
            >
               <Ionicons
              name="chevron-back-outline"
              size={25}
              color={colors.white}
            />

            </TouchableOpacity>
           
          </PH10>
          <CustomText
            label={"NetFlix"}
            color={colors.white}
            fontSize={14}
            fontFamily={"inter"}
          />
        </Row>

        <BtnContainer>
          <Feather name={"bell"} color={colors.white} size={25} />
          <Feather name={"cast"} color={colors.white} size={25} />
          <Feather name={"search"} color={colors.white} size={25} />
          <Entypo name={"dots-three-vertical"} color={colors.white} size={20} />
        </BtnContainer>
      </Row>
    </View>
  );
};

export default Header;

const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});

const Row = styled(View, {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop:5
});
const BtnContainer = styled(View, {
  flexDirection: "row",
  alignItems: "center",
  width:"50%",
  justifyContent: "space-between",
  paddingHorizontal: scale(15),
// backgroundColor:"red"
});

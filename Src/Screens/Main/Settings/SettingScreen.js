import { View, Text, SafeAreaView,TouchableOpacity } from "react-native";
import React from "react";
import SettingHeader from "./molecules/SettingHeader";
import styled from "react-native-styled-components";
import SettingBody from "./molecules/SettingBody";
import CustomText from "../../../Components/CustomText";
import { colors } from "../../../Utils/Colors";


const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:"space-between"}}>
      <Container>
        <SettingHeader 
        onPress={()=>{
          navigation.goBack()

        }}
        />
        <SettingBody />

       
      </Container>
      <View style={{height:"30%",alignItems:"center",width:"100%",flexDirection:"row"}}>
        <TouchableOpacity
        activeOpacity={0.6}
        >
        <CustomText
                  fontSize={15}
                  color={colors.black}
                  fontFamily={"semiBold"}
                  label={"Logout"}
                  marginLeft={20}
                />

        </TouchableOpacity>
   
        </View>
    </SafeAreaView>
  );
};

const Container = styled(View, {
  width: "100%",
  paddingHorizontal: 20,
});

export default SettingScreen;

import { View, Text, Image, SafeAreaView, Platform } from "react-native";
import React from "react";
import styled from "react-native-styled-components";
import CustomText from "../../../Components/CustomText";
import icons from "../../../../Assets/Icons";
import { colors } from "../../../Utils/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Spacer } from "../../../Components/Spacer";
import CustomButton from "../../../Components/CustomButton";

const WelcomeCollection = ({navigation}) => {
  return (
    <Container>
      {/* <SafeAreaView> */}
      <Spacer height={20}/>
        <MyCollection>
          <View
            style={{ alignSelf: "center", paddingHorizontal: 8,  }}
          >
            {/* <FontAwesome5
              name="bell"
              backgroundColor={colors.black}
              size={22}
            /> */}
            <Image
              source={icons.bellIcon}
              style={{ height: 23, width: 35 }}
              resizeMode={"contain"}
            />

          </View>

          <View>
            <CustomText
              label="My Collection"
              fontFamily={"bold"}
              fontSize={20}
              color={colors.black}
            />
          </View>

          <View style={{ alignSelf: "center" }}>
            <Image
              source={icons.settingIcon}
              style={{ height: 20, width: 35 }}
              resizeMode={"contain"}
            />
          </View>
        </MyCollection>
      {/* </SafeAreaView> */}

      <Spacer height={100} />
      <Container1>
        <CustomText
          label="Welcome to Your Collection"
          fontFamily={"bold"}
          alignSelf={"center"}
          textAlign={"center"}
          fontSize={25}
          color={colors.darkBlack}
        />
        <Spacer height={15} />
        <View style={{paddingHorizontal:10}}>
        <CustomText
          label="Add your own AI-generated artwork to get started"
          fontFamily={"regular"}
          alignSelf={"center"}
          textAlign={"center"}
          fontSize={12}
          color={colors.darkBlack}
        />

        </View>
     
        <Spacer height={60} />
        <View style={{
            shadowOffset: { width: 4, height: 5 },
            shadowColor: "#100C3E",
            shadowOpacity: 0.3,
            shadowRadius: 5,
            width: "100%",
            // elevation: 1
          }}
          >
          <CustomButton
            title="Add Your Artwork"
            borderRadius={15}
            backgroundColor={colors.black}
            onPress={() => navigation.navigate("MyCollection")}
          />
        </View>
      </Container1>
    </Container>
  );
};

const Container = styled(View, {
  display: "flex",
  width: "100%",
  padding: 20,
  flex: 1,
  backgroundColor: "#f3f3f3",
  // backgroundColor: "red",
});

const Container1 = styled(View, {
  display: "flex",
  width: "100%",
  padding: Platform.OS=='ios'?45:35,
  flex: 1,
  backgroundColor: "#f3f3f3",
  // backgroundColor: "red",
});

const MyCollection = styled(View, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems:"center"
});
export default WelcomeCollection;

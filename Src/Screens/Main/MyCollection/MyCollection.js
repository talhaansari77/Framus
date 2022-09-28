import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import styled from "react-native-styled-components";
import icons from "../../../../Assets/Icons";
import CustomText from "../../../Components/CustomText";
import CustomButton from "../../../Components/CustomButton";
import { colors } from "../../../Utils/Colors";
import { Spacer } from "../../../Components/Spacer";

const MyCollection = () => {
  return (
    <Container>
      <SafeAreaView>
        <MyCollections>
          <View
            style={{ alignSelf: "center", paddingHorizontal: 8, marginTop: 7 }}
          >
            {/* <FontAwesome5
            name="bell"
            backgroundColor={colors.black}
            size={22}
          /> */}
            <View>
              <Image
                source={icons.bellIcon}
                style={{ height: 23, width: 35 }}
                resizeMode={"contain"}
              />
            </View>

            <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 50,
                backgroundColor: colors.red,
                top: -30,
                left: 20,
                alignItems:"center",
                paddingTop:1
              }}
            >
              <CustomText
                label="12"
                fontSize={8}
                alignSelf={"center"}
                fontFamily={"regular"}
                color={colors.white}
              />
            </View>
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
              marginBottom={4}
            />
          </View>
        </MyCollections>
      </SafeAreaView>
    </Container>
  );
};

const Container = styled(View, {
  display: "flex",
  width: "100%",
  padding: 25,
  flex: 1,
  backgroundColor: "#f3f3f3",
  // backgroundColor: "red",
});

const Container1 = styled(View, {
  display: "flex",
  width: "100%",
  padding: 45,
  flex: 1,
  backgroundColor: "#f3f3f3",
  // backgroundColor: "red",
});

const MyCollections = styled(View, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export default MyCollection;

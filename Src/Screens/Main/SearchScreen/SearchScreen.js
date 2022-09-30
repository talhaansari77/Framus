import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import styled from "react-native-styled-components";
import { Searchbar } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { verticalScale } from "react-native-size-matters";
import { colors } from "../../../Utils/Colors";
import CustomTextInput from "../../../Components/CustomTextInput";
import { LinearGradient } from "expo-linear-gradient";
import SearchList from "./Molecules/SearchList";
import icons from "../../../../Assets/Icons";
import movies from "../../../../Assets/Movies";

const SearchScreen = ({ navigation: { goBack } }) => {
  const SearchLists = [
    {
      id: 1,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.nbc,
      name: "batman",
      Thumbnail: movies.movie1,
      leftArrow: (
        <Feather
          name={"arrow-up-left"}
          color={colors.white}
          height={50}
          size={25}
        />
      ),
    },
    {
      id: 2,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      name: "Lock & key",
      Thumbnail: movies.movie2,
      leftArrow: (
        <Feather
          name={"arrow-up-left"}
          color={colors.white}
          height={50}
          size={25}
        />
      ),
    },
    {
      id: 3,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.disnep,
      name: "Money Heist",
      Thumbnail: movies.movie3,
      leftArrow: (
        <Feather
          name={"arrow-up-left"}
          color={colors.white}
          height={50}
          size={25}
        />
      ),
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      name: "Never Have I Ever",
      Thumbnail: movies.movie1,
      leftArrow: (
        <Feather
          name={"arrow-up-left"}
          color={colors.white}
          height={50}
          size={25}
        />
      ),
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      name: "Moon Knight",
      Thumbnail: movies.movie2,
      leftArrow: (
        <Feather
          name={"arrow-up-left"}
          color={colors.white}
          height={50}
          size={25}
        />
      ),
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      name: "Money Heist",
      Thumbnail: movies.movie1,
      leftArrow: (
        <Feather
          name={"arrow-up-left"}
          color={colors.white}
          height={50}
          size={25}
        />
      ),
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      name: "Jeopardy",
      Thumbnail: movies.movie3,
      leftArrow: (
        <Feather
          name={"arrow-up-left"}
          color={colors.white}
          height={50}
          size={25}
        />
      ),
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      name: "Lock & key",
      Thumbnail: movies.movie3,
      leftArrow: (
        <Feather
          name={"arrow-up-left"}
          color={colors.white}
          height={50}
          size={25}
        />
      ),
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      name: "Money Heist",
      Thumbnail: movies.movie1,
      leftArrow: (
        <Feather
          name={"arrow-up-left"}
          color={colors.white}
          height={50}
          size={25}
        />
      ),
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      name: "Never Have I Ever",
      Thumbnail: movies.movie3,
      leftArrow: (
        <Feather
          name={"arrow-up-left"}
          color={colors.white}
          height={50}
          size={25}
        />
      ),
    },
  ];
  
  const [search, setSearch] = useState("");
  const [filerList, setFilerList] = useState(SearchLists);
  return (
    <>
      <LinearGradient colors={["#2A2D32", "#221F1F"]} style={{ flex: 1 }}>
        <MainBody>
          <SafeAreaView>
            <Searching>
              <TouchableOpacity
                style={{ marginRight: 5 }}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <AntDesign
                  name="left"
                  color={colors.white}
                  size={20}
                  onPress={() => goBack()}
                />
              </TouchableOpacity>

              <View style={{ alignItems: "center" }}>
                <CustomTextInput
                  SelfAlign={"center"}
                  backgroundColor={colors.lightBlack}
                  borderColor={colors.lightBlack}
                  width={"92%"}
                  height={43}
                  borderRadius={8}
                  placeholder={"Search Your Show"}
                  placeholderTextColor={colors.gray}
                  color={colors.white}
                  keyboardType="numbers-and-punctuation"
                  onChangeText={(txt) => {
                    let data = SearchLists.filter((item) =>
                      item.name.includes(txt) ? item : ""
                    );
                    setFilerList(data);
                    console.log(data);
                  }}
                />
              </View>
              <Mic>
                <Feather name={"mic"} color={colors.white} size={22} />
              </Mic>
            </Searching>
            <SearchList
              search={search}
              setSearch={setSearch}
              // SearchLists={SearchLists}
              filerList={filerList}
            />
          </SafeAreaView>
        </MainBody>
        <View>
          <TextInput
            style={{ height: 40, margin: 12 }}
            keyboardType="numbers-and-punctuation"
          />
        </View>
      </LinearGradient>
    </>
  );
};

const MainBody = styled(View, {
  width: "100%",
  padding: 20,
  flex: 1,
  marginTop: Platform.OS == "ios" ? null : 30,
});

const Mic = styled(View, {
  backgroundColor: colors.lightBlack,
  borderRadius: 50,
  height: 40,
  width: 40,
  marginLeft: verticalScale(5),
  justifyContent: "center",
  alignItems: "center",
});

const Searching = styled(View, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",

  // flex: 1,
});

export default SearchScreen;

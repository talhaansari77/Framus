import { View, Text, Image, Platform } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../../../Utils/Colors";
import styled from "react-native-styled-components";
import movies from "../../../../../Assets/Movies";
import CustomText from "../../../../Components/CustomText";
import { scale } from "react-native-size-matters";
import { Divider } from "react-native-elements";
import icons from "../../../../../Assets/Icons";
import { ScrollView } from "react-native-gesture-handler";
  const SearchLists = [
    {
      id: 1,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.nbc,
      Moviename: "jophery",
      Thumbnail: movies.movie1,
 
    },
    {
      id: 2,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      Moviename: "Lock & key",
      Thumbnail: movies.movie2,
      
    },
    {
      id: 3,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      Moviename: "Never Have I Ever",
      Thumbnail: movies.movie1,
   
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      Moviename: "Moon Knight",
      Thumbnail: movies.movie2,
     
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.disnep,
      Moviename: "The Mandalorian",
      Thumbnail: movies.movie1,
      
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.disnep,
      Moviename: "Jeopardy",
      Thumbnail: movies.movie2,
    
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.nbc,
      Moviename: "Money Heist",
      Thumbnail: movies.movie1,
      
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      Moviename: "jpohery",
      Thumbnail: movies.movie4,
     
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      Moviename: "jpohery",
      Thumbnail: movies.movie1,
    
    },
    {
      id: 4,
      circle: (
        <Image source={icons.RoundArrow} style={{ height: 22, width: 22 }} />
      ),
      MovieLogo: movies.Netflix,
      Moviename: "Lock & key",
      Thumbnail: movies.movie4,
     
    },
  ];
const SearchList = ({ search, setSearch, filerList }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginTop:5}}>
        {filerList.map((list, index) => (
          <Main>
            <View style={{ flex: 1.25, alignSelf: "center" }}>
              {list.circle}
            </View>

            <View style={{ flex: 8.25 }}>
              <InnerMain>
                <View style={{ flexDirection: "row", alignSelf: "center",width:"50%" }}>
                  <Image source={list.MovieLogo} resizeMode={"contain"} />
                  <CustomText
                    label={list.name}
                    fontSize={15}
                    numberOfLines={1}
                    color={colors.white}
                    marginLeft={10}
                    fontWeight={"500"}
                  />
                </View>

                <View style={{ height:53, width:85,  marginBottom: 4,borderRadius:5 }}>
                  <Image
                    source={list.Thumbnail}
                    style={{ height: "100%", width: "100%" }}
                  />
                </View>
              </InnerMain>
              <Shadow />
            </View>

            <View style={{ flex: 0.5, alignSelf: "center",marginLeft:5 }}>
            <Feather
          name={"arrow-up-left"}
          color={colors.white}
          height={50}
          size={25}
        />
            </View>
          </Main>
        ))}
      </View>
    </ScrollView>
  );
};

const Main = styled(View, {
  display: "flex",
  flexDirection: "row",
  marginTop: scale(20),
});

const InnerMain = styled(View, {
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-between",
});

const Shadow = styled(View, {
  height: 1,
  width: "100%",
  backgroundColor: colors.black,
  shadowColor: "#E1E8F1",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.5,
  shadowRadius: 2,

  elevation: 4,
});

export default SearchList;

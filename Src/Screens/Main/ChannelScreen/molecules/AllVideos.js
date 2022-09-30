import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styled from "react-native-styled-components";
import { colors } from "../../../../Utils/Colors";
import { Spacer } from "../../../../Components/Spacer";
import CustomText from "../../../../Components/CustomText";
import { moderateScale, scale } from "react-native-size-matters";
import PlaylistItem from "./PlaylistItem";
import Feather from "react-native-vector-icons/Feather";
import { Line } from "../../Profile/Profile";

const filterTypes = [
  { id: 1, name: "Sort by" },
  { id: 2, name: "Videos" },
  { id: 3, name: "Live" },
];

const AllVideos = () => {
  return (
    <Container>
        <Line elevation={5} />
      <Spacer height={10} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Playlist>
          <Row>
            {filterTypes.map((item, index) => (
              <>
                <FilterTypeBox activeOpacity={0.7}>
                  <CustomText label={item.name} color={colors.white} />
                  {index == 0 ? (
                    <Feather
                      name={"chevron-down"}
                      size={moderateScale(14)}
                      color={colors.white}
                    />
                  ) : (
                    <></>
                  )}
                </FilterTypeBox>
                <Spacer width={10} />
              </>
            ))}
          </Row>
          <Spacer height={10} />

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <>
              <PlaylistItem key={index} />
              <Spacer height={10} />
            </>
          ))}
        </Playlist>
      </ScrollView>
    </Container>
  );
};

export default AllVideos;

const Container = styled(View, {
  backgroundColor: colors.black,
  flex: 1,
});
const FilterTypeBox = styled(TouchableOpacity, {
  flexDirection: "row",
  backgroundColor: colors.lightBlack,
  borderRadius: 99,
  padding: moderateScale(10),
  justifyContent: "center",
  alignItems: "center",
});
const Row = styled(View, {
  flexDirection: "row",
});

const Playlist = styled(View, {
  justifyContent: "center",
  paddingHorizontal: scale(20),
  //   backgroundColor: "red",
});


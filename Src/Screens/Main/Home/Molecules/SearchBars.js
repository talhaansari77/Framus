import { View, Text } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../../../Utils/Colors";
import { verticalScale } from "react-native-size-matters";
import styled from "react-native-styled-components";
import CustomTextInput from "../../../../Components/CustomTextInput";

const SearchBars = () => {
  return (
    <MainSearchBar>
      <CustomTextInput
        backgroundColor={colors.lightBlack}
        borderRadius={10}
        height={verticalScale(35)}
        placeholderTextColor={colors.gray}
        mainWidth={"100%"}
        inputWidth={"75%"}
        placeholder={"Select your favoirte tv shows"}
        search
        mic
      />
    </MainSearchBar>
  );
};

const MainSearchBar = styled(View, {
  width: "100%",
  padding: 10,
  marginTop:10
});

export default SearchBars;

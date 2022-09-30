import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../../../../Components/CustomText";
import { colors } from "../../../../Utils/Colors";
import { moderateScale, verticalScale } from "react-native-size-matters";
import styled from "react-native-styled-components";
import { LinearGradient } from "expo-linear-gradient";
import movies from "../../../../../Assets/Movies";
import commonStyles from "../../../../Utils/CommonStyles";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo";

const width = Dimensions.get("window").width;

const MoviesContainer = ({
  season,
  title,
  des,
  startTime,
  endTime,
  moviesImg,
  item,
}) => {
  // const [checkBox, setcheckBox] = useState(-1);
  const [check, setCheck] = useState(false)
  return (
    <View style={styles.mainContainer}>
      <View style={{ alignItems: "center", paddingHorizontal: 10 }}>
        <CustomText
          label={startTime}
          color={colors.white}
          fontSize={verticalScale(9)}
        />
        <CustomText
          label="am"
          color={colors.white}
          fontSize={verticalScale(9)}
        />
      </View>

      <MovContainer>
       {/* <InnContainer colors={["#2A303E", "#15181E00"]}>

       </InnContainer> */}
       <LinearGradient
       colors={["#2A303E", "#15181E00"]}
       style={styles.innContainer}
       >
          <ImgContainer >
    <Image   source={moviesImg} style={commonStyles.img} />
   </ImgContainer>
   <MoviesDetail>
     <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "65%",
        justifyContent: "space-between",
      }}
    >
      <CustomText
        label={title}
        numberOfLines={1}
        color={colors.white}
        fontSize={verticalScale(10)}
      />

      <Entypo
        name={"dots-three-vertical"}
        color={colors.gray}
        size={15}
      />
    </View>

    <CustomText
      label={season}
      numberOfLines={1}
      color={colors.gray}
      fontSize={verticalScale(8)}
      marginTop={verticalScale(2)}
    />
    <View style={{ width: "70%", marginRight: 20 }}>
      <CustomText
        label={des}
        numberOfLines={3}
        color={colors.gray}
        fontSize={verticalScale(8)}
        marginTop={verticalScale(2)}
      />
    </View>
    <View
      style={{
        flexDirection: "row",
        paddingTop: verticalScale(15),
        alignItems: "center",
        width: "45%",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <CustomText
          label={startTime}
          color={colors.gray}
          fontSize={verticalScale(7)}
          children=" - "
        />
        <CustomText
          label={endTime}
          color={colors.gray}
          fontSize={verticalScale(7)}
        />
      </View>

      <CheckNoxCon
        activeOpacity={0.6}
        onPress={() => {
          setCheck(!check);
        }}
      >
        <Octicons
          name="check"
          color={check  ? colors.primary : "#000000"}
          size={moderateScale(17)}
          // onPress={onPress}
        />
      </CheckNoxCon>

      {/* <CheckNoxCon></CheckNoxCon> */}
    </View>
  </MoviesDetail>


       </LinearGradient>


      </MovContainer>


    </View>
  );
};

export default MoviesContainer;

const MovContainer = styled(View, (props) => ({
  height: verticalScale(120),
  width: "79%",
  borderRadius: 10,
    marginLeft: verticalScale(5),
  shadowColor: colors.white,
  //   backgroundColor: colors.black,
  shadowRadius: 3,

  // elevation: 1,

  alignItems: "center",
  justifyContent: "center",
  //   borderWidth:2,
  shadowOpacity: 0.5,

  shadowOffset: { width: 1, height: 2 },
}));

// const InnContainer = styled(LinearGradient, (props) => ({
//   height: "100%",
//   width: "100%%",
//   padding: 10,
//   borderRadius: 10,
//   flexDirection: "row",
//   marginLeft: verticalScale(10),
//   shadowColor: colors.white,
//   backgroundColor: colors.black,
//   shadowRadius: 3,
//   elevation: 2,
//   // alignItems: "center",
//   // justifyContent: "center",
//   // //   borderWidth:2,
//   shadowOpacity: 1,

//   shadowOffset: { width: 0.5, height: 0.5 },
// }));

const ImgContainer = styled(View, (props) => ({
  height: "100%",
  width: width / 4,
  borderRadius: 10,
}));
const MoviesDetail = styled(View, (props) => ({
  height: "100%",
  width: "100%",
  paddingHorizontal: verticalScale(5),
}));
const CheckNoxCon = styled(TouchableOpacity, (props) => ({
  height: moderateScale(20),
  width: verticalScale(20),
  backgroundColor: colors.lightBlack,
  borderRadius: 5,
  left: moderateScale(60),
  alignItems: "center",
  justifyContent: "center",
}));

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    //   justifyContent:"space-between",
    alignItems: "center",
    marginVertical: verticalScale(20),
    width: "100%",
  },
  innContainer:{
    height: "100%",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    marginLeft: verticalScale(10),
    shadowColor: colors.white,
    backgroundColor: colors.black,
    shadowRadius: 2,
    elevation: 2,
    // alignItems: "center",
    // justifyContent: "center",
    // //   borderWidth:2,
    shadowOpacity: 1,
  
    shadowOffset: { width: 0.5, height: 0.5 },

  }
});



// <MovContainer>
// <InnContainer colors={["#2A303E", "#15181E00"]}>
//   <ImgContainer>
//     <Image source={moviesImg} style={commonStyles.img} />
//   </ImgContainer>
//   <MoviesDetail>
//     <View
//       style={{
//         flexDirection: "row",
//         alignItems: "center",
//         width: "65%",
//         justifyContent: "space-between",
//       }}
//     >
//       <CustomText
//         label={title}
//         numberOfLines={1}
//         color={colors.white}
//         fontSize={verticalScale(10)}
//       />

//       <Entypo
//         name={"dots-three-vertical"}
//         color={colors.gray}
//         size={15}
//       />
//     </View>

//     <CustomText
//       label={season}
//       numberOfLines={1}
//       color={colors.gray}
//       fontSize={verticalScale(8)}
//       marginTop={verticalScale(2)}
//     />
//     <View style={{ width: "70%", marginRight: 20 }}>
//       <CustomText
//         label={des}
//         numberOfLines={3}
//         color={colors.gray}
//         fontSize={verticalScale(8)}
//         marginTop={verticalScale(2)}
//       />
//     </View>
//     <View
//       style={{
//         flexDirection: "row",
//         paddingTop: verticalScale(15),
//         alignItems: "center",
//         width: "45%",
//         justifyContent: "space-between",
//       }}
//     >
//       <View style={{ flexDirection: "row" }}>
//         <CustomText
//           label={startTime}
//           color={colors.gray}
//           fontSize={verticalScale(7)}
//           children=" - "
//         />
//         <CustomText
//           label={endTime}
//           color={colors.gray}
//           fontSize={verticalScale(7)}
//         />
//       </View>

//       <CheckNoxCon
//         activeOpacity={0.6}
//         onPress={() => {
//           setcheckBox(item.id);
//         }}
//       >
//         <Octicons
//           name="check"
//           color={checkBox == item.id ? colors.primary : "#000000"}
//           size={moderateScale(17)}
//           // onPress={onPress}
//         />
//       </CheckNoxCon>

//       {/* <CheckNoxCon></CheckNoxCon> */}
//     </View>
//   </MoviesDetail>
// </InnContainer>
// </MovContainer> 

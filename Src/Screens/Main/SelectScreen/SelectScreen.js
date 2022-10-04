import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'react-native-styled-components'
import Feather from 'react-native-vector-icons/Feather'
// import Header from './molecules/Header'
import gallery from '../../../../Assets/Gallery'
import { scale, verticalScale } from 'react-native-size-matters'
import CustomText from '../../../Components/CustomText'
import { Spacer } from '../../../Components/Spacer'
// import TopNav from './molecules/TopNav'

const SelectScreen = () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const TopNav = () => (

        <Row>
            <Spacer width={5} />
            <View >
                <Feather name='chevron-left' size={verticalScale(25)} />
            </View>
            <View style={ht}>
                <CustomText label={"Select Image"} fontSize={18} fontFamily={"bold"} />
            </View>
        </Row>
    )

    return (
        <Container>
            <Spacer height={30} />
            {/* <PH25> */}
            <TopNav />
            {/* </PH25> */}
            <Spacer height={14} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageContainer>
                    {num.map((item, index) => (
                        <TouchableOpacity activeOpacity={0.7} style={{ width: Dimensions.get('window').width / 3, height: 138 }}>
                            <Image source={gallery.gallery01} style={{ width: "100%", height: '100%' }} />
                        </TouchableOpacity>
                    ))}
                </ImageContainer>
            </ScrollView>
            {/* <Image source={gallery.gallery01}/> */}
        </Container>
    )
}

export default SelectScreen

const Container = styled(View, {
    display: "flex",
    width: "100%",
    flex: 1,
    backgroundColor: "#f3f3f3",
    // backgroundColor: "red",
});
const PH25 = styled(View, {
    paddingHorizontal: scale(25),
});
const Row = styled(View, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
});
const ImageContainer = styled(View, {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
});
const Flex = styled(View, (props) => ({
    flex: props.size
}));
const ht = {
    flex: 9, alignItems: 'center'
}
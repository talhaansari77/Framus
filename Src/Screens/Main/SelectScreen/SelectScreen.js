import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import styled from 'react-native-styled-components'
import Feather from 'react-native-vector-icons/Feather'
// import Header from './molecules/Header'
import gallery from '../../../../Assets/Gallery'
import { scale, verticalScale } from 'react-native-size-matters'
import CustomText from '../../../Components/CustomText'
import { Spacer } from '../../../Components/Spacer'
// import TopNav from './molecules/TopNav'

const SelectScreen = ({navigation}) => {
    const num = [gallery.collection01, gallery.collection02, gallery.collection03, gallery.collection03, gallery.collection02, gallery.collection01, gallery.collection02, gallery.collection03, gallery.collection02, gallery.collection01, gallery.collection01, gallery.collection02, gallery.collection03, gallery.collection02, gallery.collection03, gallery.collection01, gallery.collection02, gallery.collection01]
    const TopNav = () => (

        <Row>
            {/* <Spacer width={5} /> */}
            <TouchableOpacity 
            activeOpacity={0.6}
            style={{paddingLeft:10}}
            onPress={()=>{
                navigation.goBack()

            }}
            >
                <Feather name='chevron-left' size={verticalScale(25)} />
            </TouchableOpacity>
            <View  style={{width:"50%"}}>
                <CustomText label={"Select Image"} fontSize={18} fontFamily={"bold"} />
            </View>
            <View>

            </View>
        </Row>
    )

    return (
        <Container>
            <Spacer height={40} />
            {/* <PH25> */}
            <TopNav />
            {/* </PH25> */}
            <Spacer height={14} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageContainer>
                    {num.map((item, index) => (
                        <TouchableOpacity activeOpacity={0.7} style={{ width: Platform.OS=="ios"?  Dimensions.get('window').width /   3:Dimensions.get('window').width /   3, height: verticalScale(100), marginBottom: 1,}}>
                            <Image source={item} 
                            resizeMode="cover"
                            style={{ width: "100%", height: '100%' }}  />
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
    flexDirection: "row",
    justifyContent: "space-between",
    
    
    // backgroundColor: "black"


});
const ImageContainer = styled(View, {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "100%",
     backgroundColor: "black"
});
const Flex = styled(View, (props) => ({
    flex: props.size
}));
const ht = {
  lignItems: 'center'
}
import { StyleSheet, Text, View,Modal } from 'react-native'
import React from 'react'
import { verticalScale } from 'react-native-size-matters'
import CustomText from '../../../../Components/CustomText'
import { Spacer } from '../../../../Components/Spacer'
import { colors } from '../../../../Utils/Colors'

import CustomButton from '../../../../Components/CustomButton'
const MenueModal = ({modalVisible,setModalVisible}) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        activeOpacity={0}
        // backgroundColor={colors.white}
        onBackdropPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            width: "100%",
            padding: 30,
            height: "30%",
            bottom: 0,
            backgroundColor: colors.white,
            position: "absolute",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          {/* <Spacer height={verticalScale(20)} /> */}
          <View style={{ width: "100%", paddingHorizontal: 15 }}>
            <CustomText
              label="Menu"
              fontFamily={"bold"}
              fontSize={"20"}
              alignSelf="center"
              align="center"
              textAlign="center"
            />
          </View>

         
          <Spacer height={verticalScale(10)} />

          <CustomButton
            title="See Less Art Like This"
            fontSize={16}
            borderRadius={17}
            height={55}
            onPress={()=>{
                setModalVisible(false)

            }}
            backgroundColor={"#232323"}
          />

<Spacer height={verticalScale(10)} />

<CustomButton
            title="Report This"
            fontSize={16}
            borderRadius={17}
            height={55}
            backgroundColor={"#490000"}
          />

         
        </View>
      </Modal>
  )
}

export default MenueModal

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import icons from '../../../../../Assets/Icons'
import { verticalScale } from 'react-native-size-matters'

const PlayContainer = ({addCollection,setAddCollection}) => {
  return (
    <View
    style={styles.mainContainer}
  >
    <TouchableOpacity activeOpacity={0.5}>
      <View style={{ display: "flex", alignSelf: "center" }}>
        <Image source={icons.on} style={{ height: 18, width: 15 }} />
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        alignSelf: "center",
        marginHorizontal: verticalScale(30),
      }}
      onPress={() => {
        setAddCollection(!addCollection);
      }}
    >
      <Image
        resizeMode="contain"
        source={addCollection ? icons.group : icons.unGroup}
        style={{ height: 30, width: 30 }}
      />
      {/* <AntDesign name="hearto" size={27} /> */}
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.6}>
      <View style={{ display: "flex", alignSelf: "center" }}>
        <Image
          resizeMode="contain"
          source={icons.next}
          style={{ height: 20, width: 20 }}
        />
      </View>
    </TouchableOpacity>
  </View>
  
  )
}

export default PlayContainer

const styles = StyleSheet.create({
    mainContainer:{
        
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: verticalScale(40),
            // paddingTop:verticalScale(5)
            
          
    }

})
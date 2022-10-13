import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import DisplayHeader from './molecules/DisplayHeader'
import { Spacer } from '../../../Components/Spacer'
import DisplayBody from './molecules/DisplayBody'

const DisplayTimer = ({navigation}) => {
  return (
    <View>
      <SafeAreaView>
      <DisplayHeader
        onPress={() => {
          navigation.goBack();
        }}
       />
      <Spacer height={120} />
      <DisplayBody />
      </SafeAreaView>
    </View>
  )
}

export default DisplayTimer
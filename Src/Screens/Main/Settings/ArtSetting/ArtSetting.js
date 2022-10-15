import { View, Text } from 'react-native'
import React from 'react'
import ArtSettingHeader from './molecules/ArtSettingHeader'
import ArtSettingBody from './molecules/ArtSettingBody'

const ArtSetting = ({navigation}) => {
  return (
    <View>
        <ArtSettingHeader
          onPress={() => {
            navigation.goBack();
          }}
        />
        <ArtSettingBody />
    </View>
  )
};

export default ArtSetting
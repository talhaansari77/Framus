import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import RemainderScreen from "../../Screens/Main/Remainder/RemainderScreen";

const RemainderStack = () => {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName={"Settings"}
    >
      <Stack.Screen name="Remainder" component={RemainderScreen} />
      
      {/* <Stack.Screen name="SearchScreen" component={SearchScreen} /> */}
  
    </Stack.Navigator>
  )
}

export default RemainderStack


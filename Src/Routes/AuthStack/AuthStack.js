import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Welcome from "../../Screens/Auth/welcome";
import Welcome from "../../Screens/Auth/welcome/Welcome";
import Signup from "../../Screens/Auth/signup/Signup";
// import Login from "../../screens/auth/login";





const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Welcome"}
    >
      <Stack.Screen name="Welcome" component={Welcome} />

     <Stack.Screen name="Signup" component={Signup} />
      {/* <Stack.Screen name="Login" component={Login} />  */}

    </Stack.Navigator>
  );
};

export default AuthStack;
